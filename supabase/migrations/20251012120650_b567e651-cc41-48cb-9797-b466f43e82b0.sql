-- Create pages table for editable content
CREATE TABLE public.pages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  content TEXT,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Create team table
CREATE TABLE public.team (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  bio TEXT,
  image_url TEXT,
  order_index INTEGER DEFAULT 0
);

-- Create testimonials table
CREATE TABLE public.testimonials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  author TEXT NOT NULL,
  quote TEXT NOT NULL,
  company TEXT,
  order_index INTEGER DEFAULT 0
);

-- Create contact submissions table
CREATE TABLE public.contact_submissions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.pages ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.team ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;

-- Public read access for pages, team, and testimonials
CREATE POLICY "Pages are viewable by everyone"
  ON public.pages FOR SELECT
  USING (true);

CREATE POLICY "Team members are viewable by everyone"
  ON public.team FOR SELECT
  USING (true);

CREATE POLICY "Testimonials are viewable by everyone"
  ON public.testimonials FOR SELECT
  USING (true);

-- Anyone can submit contact forms
CREATE POLICY "Anyone can submit contact forms"
  ON public.contact_submissions FOR INSERT
  WITH CHECK (true);

-- Insert some initial data
INSERT INTO public.team (name, role, bio, order_index) VALUES
  ('Sarah Johnson', 'Founder & CEO', 'Passionate about creating lovable products that make a difference.', 1),
  ('Michael Chen', 'Lead Designer', 'Crafting beautiful experiences that users love.', 2),
  ('Emma Williams', 'Head of Engineering', 'Building scalable solutions with cutting-edge technology.', 3);

INSERT INTO public.testimonials (author, quote, company, order_index) VALUES
  ('Alex Thompson', 'This is exactly what we needed. The experience is seamless and delightful!', 'TechCorp Inc.', 1),
  ('Maria Garcia', 'Outstanding quality and attention to detail. Highly recommend!', 'Creative Studios', 2),
  ('James Miller', 'A game-changer for our business. The team was amazing to work with.', 'StartupXYZ', 3);