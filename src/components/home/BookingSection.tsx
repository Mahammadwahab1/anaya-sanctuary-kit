import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Calendar, Phone, MessageCircle, Loader2 } from 'lucide-react';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Button } from '@/components/ui/button';
import { supabase } from '@/integrations/supabase/client';
import { Input } from '@/components/ui/input';
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
  interest: z.string().min(1, 'Please select your interest'),
});

type FormData = z.infer<typeof formSchema>;

const interestOptions = [
  'Schedule a Site Visit',
  'Pricing Details',
  'Floor Plans',
  'Other Inquiry',
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
      interest: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase.from('leads').insert({
        name: data.name.trim(),
        phone: data.phone.trim(),
        email: `${data.phone.trim()}@placeholder.com`, // Placeholder email since field is required in DB
        city: 'Not specified',
        budget: data.interest,
        visit_date: null,
        message: `Interest: ${data.interest}`,
        source: 'website_simplified_form',
      });

      if (error) throw error;

      toast({
        title: 'Thank you for your interest',
        description: 'Our team will contact you within 24 hours.',
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
    "Hi, I'm interested in Anaya Sanctuary villas. I'd like to know more."
  );
  const whatsappLink = `https://wa.me/919876543210?text=${whatsappMessage}`;

  return (
    <section ref={ref} className="section-padding bg-secondary">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div
            className={cn(
              'opacity-0 translate-y-8 transition-all duration-700',
              isVisible && 'opacity-100 translate-y-0'
            )}
          >
            <p className="font-body text-gold text-sm tracking-[0.3em] uppercase mb-4">
              Take the Next Step
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Book a
              <span className="text-primary"> Site Visit</span>
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed mb-8">
              The best way to experience Anaya is in person. Walk the grounds, feel the calm, 
              and see why families are choosing to call this home.
            </p>

            <div className="space-y-5 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-foreground">
                    Private Tours Available
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    Personalized walkthrough at your convenience
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-foreground">
                    Call Us Directly
                  </h3>
                  <p className="font-body text-sm text-muted-foreground">
                    +91 98765 43210
                  </p>
                </div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <Button
              asChild
              size="lg"
              className="btn-glow bg-[#25D366] text-white hover:bg-[#20BD5A]"
            >
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-5 h-5 mr-2" />
                Chat on WhatsApp
              </a>
            </Button>
          </div>

          {/* Simplified Form */}
          <div
            className={cn(
              'luxury-card p-8 md:p-10',
              'opacity-0 translate-y-8 transition-all duration-700 delay-200',
              isVisible && 'opacity-100 translate-y-0'
            )}
          >
            <h3 className="font-display text-2xl text-foreground mb-6">
              Request a Callback
            </h3>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-body text-sm">Your Name *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Full name"
                          className="bg-background border-border h-12"
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
                      <FormLabel className="font-body text-sm">Mobile Number *</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="+91 98765 43210"
                          className="bg-background border-border h-12"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="interest"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-body text-sm">Interested In *</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-background border-border h-12">
                            <SelectValue placeholder="Select your interest" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {interestOptions.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <p className="font-body text-xs text-muted-foreground">
                  We respect your privacy and will only contact you regarding Anaya Sanctuary.
                </p>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full btn-glow bg-primary text-primary-foreground hover:bg-primary/90 h-12"
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
                      Book a Site Visit
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
