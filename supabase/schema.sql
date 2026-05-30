create table if not exists public.projects (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  category text not null,
  impact text not null,
  summary text,
  is_featured boolean not null default false,
  rank integer,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists projects_rank_idx on public.projects (rank);
create index if not exists projects_featured_idx on public.projects (is_featured);
