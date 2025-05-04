
import React, { useState } from "react";
import Layout from "@/components/Layout";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage 
} from "@/components/ui/form";
import { toast } from "sonner";

const formSchema = z.object({
  studentName: z.string().min(2, { message: "Student name is required" }),
  subjectName: z.string().min(2, { message: "Subject name is required" }),
  subjectCode: z.string().min(2, { message: "Subject code is required" }),
  description: z.string().min(10, { message: "Description must be at least 10 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  attachment: z.any().optional()
});

type FormValues = z.infer<typeof formSchema>;

const UpdateResources = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      studentName: "",
      subjectName: "",
      subjectCode: "",
      description: "",
      email: ""
    }
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Construct the form data for the email
      const formData = {
        to: "itsashwinr@gmail.com",
        from: data.email,
        subject: `Resource Update: ${data.subjectName} (${data.subjectCode})`,
        message: `Student Name: ${data.studentName}\n` +
                `Subject Name: ${data.subjectName}\n` +
                `Subject Code: ${data.subjectCode}\n` +
                `Description: ${data.description}\n\n` +
                `Sender Email: ${data.email}`
      };
      
      // Here we would normally send to a server, but we'll just simulate a successful submission
      console.log("Form submission data:", formData);
      
      // Show success message - Fixed the toast call to use correct syntax
      toast.success("Resource Update Submitted", {
        description: "Your update has been submitted successfully. Thank you!"
      });
      
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Error", {
        description: "There was a problem submitting your update. Please try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className="max-w-2xl mx-auto p-6 animate-fade-in">
        <h1 className="text-3xl font-bold mb-6 animate-scale-in">Update Resources</h1>
        <p className="text-muted-foreground mb-8">
          Help improve the resource hub by submitting new materials or updates.
        </p>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="studentName"
              render={({ field }) => (
                <FormItem className="transition-all duration-300 hover:translate-y-[-2px]">
                  <FormLabel>Student Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter your name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="transition-all duration-300 hover:translate-y-[-2px]">
                  <FormLabel>Your Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Enter your email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="subjectName"
              render={({ field }) => (
                <FormItem className="transition-all duration-300 hover:translate-y-[-2px]">
                  <FormLabel>Subject Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter subject name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="subjectCode"
              render={({ field }) => (
                <FormItem className="transition-all duration-300 hover:translate-y-[-2px]">
                  <FormLabel>Subject Code</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., ME2L001" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem className="transition-all duration-300 hover:translate-y-[-2px]">
                  <FormLabel>Description</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Describe the resource or update" 
                      className="min-h-[100px]" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="attachment"
              render={({ field: { value, onChange, ...fieldProps } }) => (
                <FormItem className="transition-all duration-300 hover:translate-y-[-2px]">
                  <FormLabel>Attachment (optional)</FormLabel>
                  <FormControl>
                    <Input
                      type="file"
                      className="cursor-pointer"
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        onChange(file || null);
                      }}
                      {...fieldProps}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="w-full transition-all duration-300 hover:scale-[1.02] hover:shadow-md" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit Update"}
            </Button>
          </form>
        </Form>
        <div className="mt-4 text-center text-sm text-muted-foreground animate-fade-in">
          For any further queries or suggestions, please fill in the
          <a
            href="https://forms.gle/XaL4shUhhGMUG1ut7"
            target="_blank"
            className="text-primary underline ml-1 hover:text-primary/80 transition-colors"
            rel="noopener noreferrer"
          >
            Google form link here
          </a>.
        </div>
      </div>
    </Layout>
  );
};

export default UpdateResources;
