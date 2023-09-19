import AuthForm from "@/components/auth-form";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
        <div className="col-6">
            <h1 className="text-xl font-semibold text-center">Welcome!!!</h1>
        </div>
        <AuthForm />
    </div>
  )
}