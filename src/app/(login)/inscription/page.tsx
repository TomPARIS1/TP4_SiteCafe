"use client";

import {z} from 'zod';
import {useForm, zodResolver} from '@mantine/form';
import {NumberInput, TextInput, Button, Box, Group, PasswordInput} from '@mantine/core';

const schema = z.object({
    name: z.string().min(2, {message: 'Name should have at least 2 letters'}),
    email: z.string().email({message: 'Invalid email'}),
    password: z.string().min(6, {message: 'Password should have at least 6 letters'}),
});

export default function Inscription() {

    const form = useForm({
        validate: zodResolver(schema),
        initialValues: {
            name: '',
            email: '',
            password: '',
        },
    });

    return (

        <Box maw={350} mx="auto" className="shadow-md my-5">
            <form onSubmit={form.onSubmit((values) => console.log(values))} className="p-5">
                <h1 className="mb-3">INSCRIPTION</h1>
                <TextInput
                    withAsterisk
                    label="Name"
                    placeholder="John Doe"
                    description="Le nom qui sera utilisé pour vos commandes"
                    mt="sm"
                    {...form.getInputProps('name')}
                />
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

                <Button type="submit" className="bg-green-600 my-5 h-75 items-center hover:bg-green-600" fullWidth="true">
                    S'inscrire
                </Button>
            </form>
        </Box>
    );
}