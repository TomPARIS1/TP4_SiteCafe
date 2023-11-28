"use client";

import {z} from 'zod';
import {useForm, zodResolver} from '@mantine/form';
import {NumberInput, TextInput, Button, Box, Group, PasswordInput} from '@mantine/core';
import Link from "next/link";

const schema = z.object({
    name: z.string().min(2, {message: 'Name should have at least 2 letters'}),
    email: z.string().email({message: 'Invalid email'}),
    password: z.string().min(6, {message: 'Password should have at least 6 letters'}),
});

export default function Inscription() {

    const form = useForm({
        validate: zodResolver(schema),
        initialValues: {
            email: '',
            password: '',
        },
    });

    return (

        <Box maw={350} mx="auto" className="shadow-md my-5">
            <form onSubmit={form.onSubmit((values) => console.log(values))} className="p-5">
                <h1 className="mb-3">CONNEXION</h1>
                <TextInput
                    withAsterisk
                    label="Adresse email"
                    placeholder="example@mail.com"
                    {...form.getInputProps('email')}
                />
                <PasswordInput
                    withAsterisk
                    label="Mot de passe"
                    placeholder=""
                    {...form.getInputProps('password')}
                />

                <Button type="submit" className="bg-green-600 my-5 items-center hover:bg-green-600" fullWidth="true">
                    Me connecter
                </Button>
            </form>
            <Link href={'../inscription'} className="">Créer un compte</Link>
        </Box>
    );
}