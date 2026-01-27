import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Calendar, Phone, MessageCircle, Loader2 } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { cn } from '@/lib/utils';

const formSchema = z.object({
  name: z.string().min(2, 'Please enter your name').max(100),
  phone: z.string().min(10, 'Please enter a valid phone number').max(15),
  email: z.string().email('Please enter a valid email').max(255),
  city: z.string().min(2, 'Please enter your city').max(100),
  budget: z.string().min(1, 'Please select your budget range'),
  visitDate: z.string().optional(),
  message: z.string().max(1000).optional(),
});

type FormData = z.infer<typeof formSchema>;

const budgetRanges = [
  '₹1.5 - 2 Cr',
  '₹2 - 3 Cr',
  '₹3 - 4 Cr',
  '₹4 Cr+',
];

export function BookingSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { ref, isVisible } = useScrollReveal<HTMLElement>();
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      city: '',
      budget: '',
      visitDate: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase.from('leads').insert({
        name: data.name.trim(),
        phone: data.phone.trim(),
        email: data.email.trim().toLowerCase(),
        city: data.city.trim(),
        budget: data.budget,
        visit_date: data.visitDate || null,
        message: data.message?.trim() || null,
        source: 'website_booking_form',
      });

      if (error) throw error;

      toast({
        title: 'Thank you for your interest',
        description: 'Our team will contact you within 24 hours to schedule your visit.',
      });
      
      form.reset();
    } catch (error) {
      console.error('Error submitting lead:', error);
      toast({
        title: 'Something went wrong',
        description: 'Please try again or call us directly.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappMessage = encodeURIComponent(
    "Hi, I'm interested in BrikBuild Anaya villas. I'd like to schedule a site visit."
  );
  const whatsappLink = `https://wa.me/919876543210?text=${whatsappMessage}`;

  return (
    <section ref={ref} className="section-padding bg-secondary">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Content */}
          <div
            className={cn(
              'opacity-0 translate-y-8 transition-all duration-700',
              isVisible && 'opacity-100 translate-y-0'
            )}
          >
            <p className="font-body text-gold text-sm tracking-[0.3em] uppercase mb-4">
              Begin Your Journey
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Schedule Your
              <span className="text-primary"> Private Visit</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
              Experience Anaya in person. Walk the grounds, feel the breeze, envision your future home. 
              Our team will guide you through every detail.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-foreground">
                    Personalized Tours
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    One-on-one walkthrough at your convenience
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-foreground">
                    Direct Line
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    Call us: +91 98765 43210
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <Button
              asChild
              size="lg"
              className="mt-8 btn-glow bg-[#25D366] text-white hover:bg-[#20BD5A]"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </a>
            </Button>
          </div>

          {/* Form */}
          <div
            className={cn(
              'luxury-card p-8 md:p-10',
              'opacity-0 translate-y-8 transition-all duration-700 delay-200',
              isVisible && 'opacity-100 translate-y-0'
            )}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-body text-sm">Full Name *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your name"
                            className="bg-background border-border"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-body text-sm">Phone *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="+91 98765 43210"
                            className="bg-background border-border"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-body text-sm">Email *</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="you@email.com"
                            className="bg-background border-border"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-body text-sm">City *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Current city"
                            className="bg-background border-border"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="budget"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-body text-sm">Budget Range *</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className="bg-background border-border">
                              <SelectValue placeholder="Select budget" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {budgetRanges.map((range) => (
                              <SelectItem key={range} value={range}>
                                {range}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="visitDate"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-body text-sm">Preferred Visit Date</FormLabel>
                        <FormControl>
                          <Input
                            type="date"
                            className="bg-background border-border"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-body text-sm">Message (Optional)</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Any specific requirements or questions..."
                          className="bg-background border-border min-h-[100px] resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <p className="font-body text-xs text-muted-foreground">
                  By submitting, you agree to receive communication from BrikBuild regarding Anaya. 
                  We respect your privacy and will not share your information.
                </p>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full btn-glow bg-primary text-primary-foreground hover:bg-primary/90"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Calendar className="w-5 h-5 mr-2" />
                      Request a Visit
                    </>
                  )}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
