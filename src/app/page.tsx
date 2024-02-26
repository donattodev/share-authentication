import { SignIn } from '@/components/sign-in'
import { Separator } from '@/components/separator'
import { LogoDark } from '@/components/logos/logo-dark'
import { GithubSignIn } from '@/components/github-signin'

export default function Home() {
  return (
    <main className="mx-auto flex h-screen w-full max-w-sm flex-col items-center justify-center">
      <LogoDark />
      <SignIn />
      <Separator />
      <GithubSignIn />
    </main>
  )
}
