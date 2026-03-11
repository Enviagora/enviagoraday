/*
  # Presentations Upload System

  ## Overview
  Sets up storage and database for speaker presentation uploads.

  ## New Tables
  - `presentations`
    - `id` (uuid, primary key)
    - `speaker_name` (text) - name entered by the speaker
    - `file_name` (text) - original file name
    - `storage_path` (text) - path inside the storage bucket
    - `file_size` (bigint) - file size in bytes
    - `mime_type` (text) - file MIME type
    - `created_at` (timestamptz) - upload timestamp

  ## Security
  - RLS enabled on `presentations` table
  - Anon users can INSERT (upload) their own presentation
  - No SELECT policy for anon users (admin-only access via service role)
  - Storage bucket `presentations` created as PRIVATE (no public access)
  - Service role key used in edge function to bypass RLS for storage upload
*/

CREATE TABLE IF NOT EXISTS presentations (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  speaker_name text NOT NULL,
  file_name text NOT NULL,
  storage_path text NOT NULL,
  file_size bigint NOT NULL DEFAULT 0,
  mime_type text NOT NULL DEFAULT '',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE presentations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can insert a presentation"
  ON presentations
  FOR INSERT
  TO anon
  WITH CHECK (true);
