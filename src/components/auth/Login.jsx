import TextBox from "../common/TextBox"

const Login = () => {
    return (
            <div className = "bg-neutral-500  w-screen h-screen flex justify-center">
                <div className ="bg-red-300 w-2/5 h-auto flex items-center flex-col p-10 ">
                <h1 className="m-[20%]">Login</h1>
                    <div className="bg-green-400 p-4 flex justify-center flex-col gap-10">
                        <TextBox placeholder={"UserName"} type={"text"}/>
                        <TextBox placeholder={"password"} type={"password"}/>
                    </div>

                    <div>
                        {/**button and forgot pass */}
                    </div>
                </div>
                
            </div>
            )
}

export default Login;