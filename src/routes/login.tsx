import { useState } from "react";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { FirebaseError } from "firebase/app";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Link } from "react-router-dom";
import { Error, Form, Input, Switcher, Title, Wrapper } from "../components/auth-components";
export default function Login() {
    const navigate = useNavigate();
    const [isLoading, setLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {
            //구조분해할당
            target: { name, value }, //const name = e.target.name; const value = e.target.value;
        } = e;
        if (name === "email") {
            setEmail(value);
        } else if (name === "password") {
            setPassword(value);
        }
    };
    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        if (isLoading || email === "" || password === "") return; //입력창이 비어있거나 로딩중(처리중)이면 함수 종료
        try {
            setLoading(true);
            await signInWithEmailAndPassword(auth, email, password);
            navigate("/"); //계정생성 후,사용자 프로필업데이트 후, 홈으로 이동
        } catch (e) {
            //setError
            console.log(e);
            if (e instanceof FirebaseError) {
                console.log(e.code, e.message);
                setError(e.message);
            }
        } finally {
            setLoading(false);
        }
        //create an account
        //set the name of the user.
        //redirect to the home page
        console.log(email, password);
    };
    return (
        <Wrapper>
            <Title>Log into EF</Title>
            <Form onSubmit={onSubmit}>
                <Input onChange={onChange} name="email" value={email} placeholder="Email" type="email" required />
                <Input
                    onChange={onChange}
                    name="password"
                    value={password}
                    placeholder="Password"
                    type="password"
                    required
                />
                <Input type="submit" value={isLoading ? "Loading..." : "Login"} />
            </Form>
            {error !== "" ? <Error>{error}</Error> : null}
            <Switcher>
                Don't have an account? <Link to="/create-account">Create one &rarr;</Link>
            </Switcher>
        </Wrapper>
    );
}
