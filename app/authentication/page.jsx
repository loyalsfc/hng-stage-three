import AuthForm from "@/components/auth-form";

export const metadata = {
  title: "Login"
}

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen px-4">
        <div className="col-6">
            <h1 className="text-xl font-semibold text-center">Welcome Back!!!</h1>
        </div>
        <AuthForm />
    </div>
  )
}