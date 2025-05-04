
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { supabase } from '@/lib/supabase';
import { Loader } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const signInWithGoogle = async () => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: 'https://mechiverse-resource-hub.lovable.app/',
          queryParams: {
            hd: 'iitbbs.ac.in', // This restricts to IIT BBS domain
            access_type: 'offline',
            prompt: 'consent'
          },
          skipBrowserRedirect: false
        }
      });

      if (error) {
        toast({
          variant: "destructive",
          title: "Login Error",
          description: "Please ensure you're using your @iitbbs.ac.in email"
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Authentication Error",
        description: "Failed to connect to authentication service"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="w-full max-w-md space-y-8 p-8">
        <div className="text-center space-y-6">
          <h1 className="text-4xl font-bold text-primary">IIT BBS Resource Hub</h1>
          <p className="text-muted-foreground">
            Sign in with your IIT Bhubaneswar email
          </p>
        </div>

        <div className="space-y-4">
          <Button
            className="w-full"
            onClick={signInWithGoogle}
            disabled={loading}
          >
            {loading ? (
              <>
                <Loader className="mr-2 h-4 w-4 animate-spin" />
                Connecting to Google...
              </>
            ) : (
              'Sign in with Google'
            )}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
