-- Create interest_submissions table
CREATE TABLE public.interest_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  organization TEXT NOT NULL,
  role TEXT NOT NULL,
  comments TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.interest_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to submit (public form)
CREATE POLICY "Anyone can submit interest form" 
ON public.interest_submissions 
FOR INSERT 
WITH CHECK (true);

-- Create index for email lookups
CREATE INDEX idx_interest_submissions_email ON public.interest_submissions(email);
CREATE INDEX idx_interest_submissions_created_at ON public.interest_submissions(created_at DESC);