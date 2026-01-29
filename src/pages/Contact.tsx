import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Calendar, Phone, MessageCircle, Loader2, MapPin, Clock, Mail } from 'lucide-react';
import { Navigation } from '@/components/layout/Navigation';
import { Footer } from '@/components/layout/Footer';
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
  email: z.string().email('Please enter a valid email').optional().or(z.literal('')),
  interest: z.string().min(1, 'Please select your interest'),
  message: z.string().max(500).optional(),
});

type FormData = z.infer<typeof formSchema>;

const interestOptions = [
  'Schedule a Site Visit',
  'Pricing Details',
  'Floor Plans',
  'Payment Plans',
  'Other Inquiry',
];

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      interest: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    try {
      const { error } = await supabase.from('leads').insert({
        name: data.name.trim(),
        phone: data.phone.trim(),
        email: data.email?.trim() || `${data.phone.trim()}@placeholder.com`,
        city: 'Not specified',
        budget: data.interest,
        visit_date: null,
        message: data.message?.trim() || `Interest: ${data.interest}`,
        source: 'website_contact_page',
      });

      if (error) throw error;

      toast({
        title: 'Thank you for reaching out',
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
    "Hi, I'm interested in scheduling a private site visit to Anaya Sanctuary. Please share the available time slots."
  );
  const whatsappLink = `https://wa.me/919876543210?text=${whatsappMessage}`;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Banner */}
      <section className="relative pt-32 pb-20 bg-primary">
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-10" />
        <div className="container-wide relative">
          <p className="font-body text-gold text-sm tracking-[0.3em] uppercase mb-4">
            Get in Touch
          </p>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground mb-4">
            Schedule a Private
            <span className="block text-gold">Site Visit</span>
          </h1>
          <p className="font-body text-lg text-primary-foreground/80 max-w-xl">
            Experience Anaya Sanctuary in person. Walk the grounds, feel the calm, 
            and discover why families are choosing to call this home.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="font-display text-3xl text-foreground mb-4">
                  We'd Love to Hear From You
                </h2>
                <p className="font-body text-muted-foreground leading-relaxed">
                  Whether you're ready to schedule a visit or simply have questions about 
                  Anaya Sanctuary, our team is here to help. Reach out through any of the 
                  channels below.
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-4">
                <div className="luxury-card p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-foreground mb-1">
                      Call Us
                    </h3>
                    <p className="font-body text-muted-foreground text-sm mb-2">
                      Speak directly with our sales team
                    </p>
                    <a 
                      href="tel:+919876543210" 
                      className="font-body text-primary hover:text-gold transition-colors"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="luxury-card p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-foreground mb-1">
                      WhatsApp
                    </h3>
                    <p className="font-body text-muted-foreground text-sm mb-2">
                      Quick responses on WhatsApp
                    </p>
                    <a 
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-body text-primary hover:text-gold transition-colors"
                    >
                      Chat with us →
                    </a>
                  </div>
                </div>

                <div className="luxury-card p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-foreground mb-1">
                      Email
                    </h3>
                    <p className="font-body text-muted-foreground text-sm mb-2">
                      For detailed inquiries
                    </p>
                    <a 
                      href="mailto:sales@anayasanctuary.com" 
                      className="font-body text-primary hover:text-gold transition-colors"
                    >
                      sales@anayasanctuary.com
                    </a>
                  </div>
                </div>

                <div className="luxury-card p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-foreground mb-1">
                      Site Office
                    </h3>
                    <p className="font-body text-muted-foreground text-sm mb-2">
                      Visit our experience center
                    </p>
                    <p className="font-body text-foreground text-sm">
                      Anaya Sanctuary,<br />
                      Off Sarjapur Road,<br />
                      Bangalore - 560035
                    </p>
                  </div>
                </div>

                <div className="luxury-card p-6 flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-foreground mb-1">
                      Visiting Hours
                    </h3>
                    <p className="font-body text-muted-foreground text-sm mb-2">
                      By appointment only
                    </p>
                    <p className="font-body text-foreground text-sm">
                      Monday – Sunday: 10:00 AM – 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="luxury-card p-8 md:p-10">
              <h3 className="font-display text-2xl text-foreground mb-2">
                Request a Callback
              </h3>
              <p className="font-body text-muted-foreground text-sm mb-6">
                Fill out the form below and we'll get back to you within 24 hours.
              </p>
              
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-body text-sm">Full Name *</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your name"
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
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-body text-sm">Email (Optional)</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="your@email.com"
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

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="font-body text-sm">Message (Optional)</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Any specific questions or preferred visit timing..."
                            className="bg-background border-border min-h-[100px] resize-none"
                            {...field}
                          />
                        </FormControl>
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
                        Schedule My Visit
                      </>
                    )}
                  </Button>
                </form>
              </Form>

              {/* WhatsApp Alternative */}
              <div className="mt-6 pt-6 border-t border-border">
                <p className="font-body text-sm text-muted-foreground text-center mb-4">
                  Prefer instant messaging?
                </p>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full h-12 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white"
                >
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="section-padding bg-secondary">
        <div className="container-wide">
          <div className="text-center mb-10">
            <p className="font-body text-gold text-sm tracking-[0.3em] uppercase mb-4">
              Find Us
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-foreground">
              Visit Anaya Sanctuary
            </h2>
          </div>
          <div className="luxury-card overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.1234567890123!2d77.7000000!3d12.8500000!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDUxJzAwLjAiTiA3N8KwNDInMDAuMCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Anaya Sanctuary Location"
              className="w-full"
            />
          </div>
          <p className="font-body text-xs text-muted-foreground text-center mt-4">
            * Map location is approximate. Our team will share exact directions upon booking.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
