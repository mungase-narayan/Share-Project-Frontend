import { Button } from "antd";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookSquare } from "react-icons/fa";
import { IoKeyOutline } from "react-icons/io5";
import { BiLogInCircle } from "react-icons/bi";

import { CiMail } from "react-icons/ci";
import { Input } from "antd";

import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

const Login = () => {
    return (
        <div>
            <div class="flex px-32 py-20 min-h-screen ">
                <div class="w-full md:w-1/2 border bg-white p-10 flex flex-col justify-center shadow-lg rounded-lg m-4">
                    <div class="mb-8">
                        <h2 class="text-3xl font-bold font-mono mb-2 text-center">
                            Log in to your Account
                        </h2>
                        <p class="text-muted-foreground mb-6 text-center">
                            Welcome back! Select method to log in:
                        </p>
                        <div class="flex items-center justify-center space-x-4 mb-6">
                            <Button className="px-6">
                                <FcGoogle />
                                <h1 className="">Google</h1>
                            </Button>
                            <Button className="px-6">
                                <FaFacebookSquare />
                                <h1 className="">FaceBook</h1>
                            </Button>
                        </div>
                        <div class="flex items-center mb-4">
                            <div class="flex-grow border-t border-zinc-300"></div>
                            <span class="mx-4 text-zinc-500">
                                or continue with email
                            </span>
                            <div class="flex-grow border-t border-zinc-300"></div>
                        </div>
                        <form className="space-y-4 mt-10">
                            <div>
                                <Input
                                    size="large"
                                    placeholder=" Enter your username"
                                    prefix={<CiMail />}
                                />
                            </div>
                            <div>
                                <Input.Password
                                    size="large"
                                    prefix={<IoKeyOutline />}
                                    placeholder=" Enter password"
                                    iconRender={(visible) =>
                                        visible ? (
                                            <EyeTwoTone />
                                        ) : (
                                            <EyeInvisibleOutlined />
                                        )
                                    }
                                />
                            </div>
                            <div class="flex items-center justify-between">
                                <label class="flex text-muted-foreground items-center">
                                    <input type="checkbox" class="mr-2" />
                                    Remember me
                                </label>
                                <a
                                    href="#"
                                    class="text-muted-foreground hover:cursor-pointer"
                                >
                                    Forgot Password?
                                </a>
                            </div>
                        </form>
                        <div className=" mt-10">
                            <Button className=" bg-pink-400">
                                Login
                                <BiLogInCircle />
                            </Button>
                        </div>
                    </div>
                    <div class="text-center">
                        <p>
                            Don't have an account?{" "}
                            <a href="#" class="text-primary hover:underline">
                                Create an account
                            </a>
                        </p>
                    </div>
                </div>

                <div class="hidden md:flex bg-[url('https://img.freepik.com/free-vector/sign-concept-illustration_114360-125.jpg?uid=R155203467&ga=GA1.1.1799713956.1707763374&semt=ais_user')] bg-cover border w-1/2 flex-col justify-center items-center text-center text-primary-foreground p-8 rounded-lg m-4 shadow-lg">
                    <div class="mb-8"></div>
                </div>
            </div>
        </div>
    );
};

export default Login;
