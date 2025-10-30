import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

const formSchema = z.object({
  email: z.string().trim().email({ message: "Invalid email address" }).max(255),
  organization: z.string().trim().min(1, { message: "Organization is required" }).max(200),
  role: z.string().trim().min(1, { message: "Role is required" }).max(100),
  comments: z.string().trim().max(1000).optional(),
});

const InterestForm = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    organization: '',
    role: '',
    comments: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});
    setLoading(true);

    try {
      const validatedData = formSchema.parse(formData);

      const { error } = await supabase
        .from('interest_submissions')
        .insert([{
          email: validatedData.email,
          organization: validatedData.organization,
          role: validatedData.role,
          comments: validatedData.comments || null,
        }]);

      if (error) throw error;

      toast({
        title: "Success!",
        description: "Thank you for your interest. We'll be in touch soon!",
      });

      setFormData({ email: '', organization: '', role: '', comments: '' });
      setTimeout(() => navigate('/'), 2000);
    } catch (error) {
      if (error instanceof z.ZodError) {
        const fieldErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            fieldErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(fieldErrors);
      } else {
        toast({
          title: "Error",
          description: "Something went wrong. Please try again.",
          variant: "destructive",
        });
      }
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-black">
      <Navbar />
      <main className="flex-1 py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Express Your Interest
            </h1>
            <p className="text-white/60 text-lg">
              Join us on this exciting journey. Fill out the form below and we'll get in touch.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 border border-white/10 rounded-lg p-8">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-white">
                Email *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                required
              />
              {errors.email && (
                <p className="text-red-400 text-sm">{errors.email}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="organization" className="text-white">
                Organization *
              </Label>
              <Input
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                placeholder="Your organization name"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                required
              />
              {errors.organization && (
                <p className="text-red-400 text-sm">{errors.organization}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="role" className="text-white">
                Role *
              </Label>
              <Input
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
                placeholder="Your role or position"
                className="bg-white/10 border-white/20 text-white placeholder:text-white/40"
                required
              />
              {errors.role && (
                <p className="text-red-400 text-sm">{errors.role}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="comments" className="text-white">
                Comments / Questions (Optional)
              </Label>
              <Textarea
                id="comments"
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                placeholder="Share any comments or questions you may have..."
                className="bg-white/10 border-white/20 text-white placeholder:text-white/40 min-h-[120px]"
                rows={5}
              />
              {errors.comments && (
                <p className="text-red-400 text-sm">{errors.comments}</p>
              )}
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-yellow-500 to-amber-600 hover:from-yellow-600 hover:to-amber-700 text-black font-semibold py-6 text-lg"
            >
              {loading ? 'Submitting...' : 'Submit Interest Form'}
            </Button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default InterestForm;
