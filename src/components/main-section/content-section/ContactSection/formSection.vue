<script setup lang="ts">
import sendIcon from "@/assets/icon/send.svg";
import { useForm } from "vee-validate";
import { toTypedSchema } from "@vee-validate/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  //   FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const formSchema = toTypedSchema(
  z.object({
    name: z.string().min(2, "Name is too short"),
    email: z.string().email("Invalid email address"),
    message: z.string().min(10, "Message is too short"),
  })
);

const form = useForm({
  validationSchema: formSchema,
});

const onSubmit = form.handleSubmit((values) => {
  console.log("Form submitted!", values);
});
</script>

<template>
  <form @submit="onSubmit" class="space-y-6">
    <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
      <!-- Name -->
      <FormField v-slot="{ componentField }" name="name">
        <FormItem>
          <FormLabel>Your Name</FormLabel>
          <FormControl>
            <Input placeholder="Name" v-bind="componentField" />
          </FormControl>
          <!-- <FormDescription>Enter your name</FormDescription> -->
          <FormMessage />
        </FormItem>
      </FormField>

      <!-- Email -->
      <FormField v-slot="{ componentField }" name="email">
        <FormItem>
          <FormLabel>Your Email</FormLabel>
          <FormControl>
            <Input placeholder="Email" v-bind="componentField" />
          </FormControl>
          <!-- <FormDescription>Enter your email</FormDescription> -->
          <FormMessage />
        </FormItem>
      </FormField>
      <Select>
        <SelectTrigger class="px-3">
          <SelectValue placeholder="Select" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Fruits</SelectLabel>
            <SelectItem value="apple"> Apple </SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
    <Label for="message-2">Your message</Label>
    <Textarea id="message-2" placeholder="Type your message here." />
    <p class="text-sm text-muted-foreground">
      Your message will be copied to the support team.
    </p>
    <Button type="submit">
      Send
      <img :src="sendIcon" alt="Send Icon" class="w-3 h-3" />
    </Button>
  </form>
</template>
