import { GithubIcon } from '@/components/github-icon'

export function GithubSignIn() {
  return (
    <button className="mt-6 flex h-12 w-full items-center justify-center gap-3 rounded bg-primary-500 px-4 text-sm font-bold uppercase text-gray-950 outline-none ring-white transition-all hover:bg-primary-300 focus:ring-2">
      <GithubIcon className="size-5" />
      ENTRE COM O GITHUB
    </button>
  )
}
