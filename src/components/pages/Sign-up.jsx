import { Button } from "antd";
import React from "react";

import { FcGoogle } from "react-icons/fc";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

import { UserOutlined } from "@ant-design/icons";
import { Input } from "antd";

import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { IoKeyOutline } from "react-icons/io5";

const Signup = () => {
    return (
        <div>
            <div class="min-h-screen flex items-center py-14 justify-center">
                <div class="bg-white border shadow-lg rounded-lg flex flex-col md:flex-row max-w-4xl w-full">
                    <div class="bg-yellow-300 p-8 md:w-1/2 flex flex-col justify-center items-center">
                        <h2 class="text-2xl font-bold mb-4">
                            Discover the world's top Designers & Creatives.
                        </h2>
                        <img
                            src="https://img.freepik.com/free-vector/team-checklist-concept-illustration_114360-9880.jpg?uid=R155203467&ga=GA1.1.1799713956.1707763374&semt=sph"
                            alt="Illustration of creative work"
                            class="mb-4 rounded-lg"
                        />
                    </div>

                    <div class="p-8 md:w-1/2">
                        <div class="flex justify-end mb-4">
                            <p class="text-sm">
                                Already a member?{" "}
                                <a href="#" class="text-blue-500">
                                    Sign in
                                </a>
                            </p>
                        </div>
                        <h2 class="text-2xl font-bold mb-4">
                            Sign up to Dribbble
                        </h2>
                        <div class="flex space-x-2 mb-4">
                            <div>
                                <Button>
                                    <FcGoogle />
                                    <h1>Sign up with Google</h1>
                                </Button>
                            </div>

                            <Button>
                                <FaTwitterSquare />
                            </Button>

                            <Button>
                                <FaFacebookSquare />
                            </Button>
                        </div>
                        <div class="flex items-center mb-4">
                            <div class="flex-grow border-t border-zinc-300"></div>
                            <span class="mx-4 text-zinc-500">or</span>
                            <div class="flex-grow border-t border-zinc-300"></div>
                        </div>
                        <form>
                            <div class="mb-4">
                                <label class="block text-zinc-700 ml-1">
                                    Full Name
                                </label>
                                <Input
                                    size="large"
                                    placeholder="Enter Full Name"
                                    prefix={<UserOutlined />}
                                />
                            </div>
                            <div class="mb-4">
                                <label class="block text-zinc-700 ml-1">
                                    Username
                                </label>
                                <Input
                                    size="large"
                                    placeholder="Enter Username"
                                    prefix={<UserOutlined />}
                                />
                            </div>
                            <div class="mb-4">
                                <label class="block text-zinc-700 ml-1">
                                    Email Address
                                </label>
                                <Input
                                    size="large"
                                    placeholder="Enter Email Address"
                                    prefix={<MdOutlineEmail className="" />}
                                />
                            </div>
                            <div class="mb-4">
                                <label class="block text-zinc-700 ml-1">
                                    Password
                                </label>
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
                            <div class="mb-4">
                                <label class="block text-zinc-700 ml-1">
                                   Confirm Password
                                </label>
                                <Input.Password
                                    size="large"
                                    prefix={<IoKeyOutline />}
                                    placeholder=" Enter Confirm Password"
                                    iconRender={(visible) =>
                                        visible ? (
                                            <EyeTwoTone />
                                        ) : (
                                            <EyeInvisibleOutlined />
                                        )
                                    }
                                />
                            </div>
                            <div class="mb-4 flex items-center">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    class="mr-2"
                                />
                                <label
                                    for="terms"
                                    class="text-zinc-700 text-sm"
                                >
                                    Creating an account means you're okay with
                                    our{" "}
                                    <a href="#" class="text-blue-500">
                                        Terms of Service
                                    </a>
                                    ,{" "}
                                    <a href="#" class="text-blue-500">
                                        Privacy Policy
                                    </a>
                                    , and our default
                                    <a href="#" class="text-blue-500">
                                        Notification Settings
                                    </a>
                                </label>
                            </div>
                            <Button className=" bg-pink-400">
                                <h1>Create Account</h1>
                            </Button>
                        </form>
                        <p class="text-xs text-zinc-500 mt-4">
                            This site is protected by reCAPTCHA and the Google{" "}
                            <a href="#" class="text-blue-500">
                                Privacy Policy
                            </a>{" "}
                            and{" "}
                            <a href="#" class="text-blue-500">
                                Terms of Service
                            </a>{" "}
                            apply.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;
