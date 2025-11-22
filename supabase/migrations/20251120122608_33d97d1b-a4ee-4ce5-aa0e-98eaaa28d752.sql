-- Create partner_inquiries table
CREATE TABLE public.partner_inquiries (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT NOT NULL,
  company TEXT NOT NULL,
  partner_type TEXT NOT NULL,
  location TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now() NOT NULL
);

-- Enable RLS
ALTER TABLE public.partner_inquiries ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert (public form)
CREATE POLICY "Anyone can submit partner inquiry"
ON public.partner_inquiries
FOR INSERT
TO anon, authenticated
WITH CHECK (true);

-- Only authenticated users can view inquiries (for admin dashboard later)
CREATE POLICY "Authenticated users can view inquiries"
ON public.partner_inquiries
FOR SELECT
TO authenticated
USING (true);