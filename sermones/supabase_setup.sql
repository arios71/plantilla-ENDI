-- Biblioteca en línea de apuntes de sermón
-- Ejecuta este archivo en Supabase > SQL Editor, dentro del proyecto ya utilizado por la plantilla ENDI.

create table if not exists public.sermon_notes (
  id text primary key,
  user_id uuid not null references auth.users(id) on delete cascade,
  title text not null default '',
  sermon_date text,
  speaker text not null default '',
  series text not null default '',
  passage text not null default '',
  content_html text not null default '<p></p>',
  updated_at timestamptz not null default now()
);

alter table public.sermon_notes enable row level security;

grant select, insert, update, delete on public.sermon_notes to authenticated;
revoke all on public.sermon_notes from anon;

drop policy if exists "Users can read own sermon notes" on public.sermon_notes;
create policy "Users can read own sermon notes"
  on public.sermon_notes for select to authenticated
  using (auth.uid() = user_id);

drop policy if exists "Users can insert own sermon notes" on public.sermon_notes;
create policy "Users can insert own sermon notes"
  on public.sermon_notes for insert to authenticated
  with check (auth.uid() = user_id);

drop policy if exists "Users can update own sermon notes" on public.sermon_notes;
create policy "Users can update own sermon notes"
  on public.sermon_notes for update to authenticated
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

drop policy if exists "Users can delete own sermon notes" on public.sermon_notes;
create policy "Users can delete own sermon notes"
  on public.sermon_notes for delete to authenticated
  using (auth.uid() = user_id);
