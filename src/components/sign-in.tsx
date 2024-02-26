import { Form } from '@/components/form'

export function SignIn() {
  return (
    <form className="mt-16 flex w-full flex-col gap-4">
      <Form.Field>
        <Form.Label htmlFor="email">Endereço de e-mail</Form.Label>
        <Form.Input
          type=""
          name="email"
          placeholder="Endereço de e-mail"
          autoFocus
        />
      </Form.Field>

      <Form.Field>
        <Form.Label htmlFor="password">Sua senha</Form.Label>
        <Form.Input
          type="password"
          name="password"
          placeholder="************"
        />
      </Form.Field>

      <button className="h-12 w-full rounded bg-primary-500 px-4 text-sm font-bold uppercase text-gray-950 outline-none ring-white transition-all hover:bg-primary-300 focus:ring-2">
        Acessar
      </button>
    </form>
  )
}
