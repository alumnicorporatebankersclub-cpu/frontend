"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button, Field, Input } from "@/components/ui";
import { useCreateUser } from "@/hooks/use-users";

const createUserSchema = z.object({
  name: z.string().trim().min(2, "Name must be at least 2 characters").max(80, "Name is too long"),
  email: z.email("Enter a valid email address"),
});

type CreateUserFormValues = z.infer<typeof createUserSchema>;

export function UserForm() {
  const createUser = useCreateUser();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CreateUserFormValues>({
    resolver: zodResolver(createUserSchema),
    defaultValues: { name: "", email: "" },
  });

  const onSubmit = handleSubmit((values) => {
    // Errors are surfaced via toast in the mutation hook; only reset on success.
    createUser.mutate(values, { onSuccess: () => reset() });
  });

  const isPending = isSubmitting || createUser.isPending;

  return (
    <form onSubmit={onSubmit} noValidate className="flex flex-col gap-4">
      <Field id="name" label="Name" error={errors.name?.message}>
        <Input
          id="name"
          autoComplete="name"
          placeholder="Ada Lovelace"
          invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "name-error" : undefined}
          disabled={isPending}
          {...register("name")}
        />
      </Field>

      <Field id="email" label="Email" error={errors.email?.message}>
        <Input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="ada@example.com"
          invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "email-error" : undefined}
          disabled={isPending}
          {...register("email")}
        />
      </Field>

      <Button type="submit" isLoading={isPending} className="self-start">
        Create user
      </Button>
    </form>
  );
}
