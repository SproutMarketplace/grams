import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Flower2 } from 'lucide-react';

export default function SignupPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <Card className="mx-auto w-full max-w-sm shadow-lg">
        <CardHeader className="text-center">
            <Link href="/" className="flex items-center justify-center gap-2 font-bold text-2xl text-accent mb-2">
                <Flower2 className="w-8 h-8" />
                <span>Grams to Gains</span>
            </Link>
          <CardTitle className="text-2xl">Sign Up</CardTitle>
          <CardDescription>
            Create your account to get started.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="business-name">Business Name</Label>
              <Input id="business-name" placeholder="Green Leaf Inc." required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="license-number">License Number</Label>
              <Input id="license-number" placeholder="C10-0000123-LIC" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="user-type">We are a...</Label>
              <Select>
                <SelectTrigger id="user-type">
                  <SelectValue placeholder="Select user type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="manufacturer">Manufacturer</SelectItem>
                  <SelectItem value="dispensary">Dispensary</SelectItem>
                  <SelectItem value="grower">Grower</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button type="submit" className="w-full">
              Create an account
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            Already have an account?{' '}
            <Link href="/login" className="underline">
              Login
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
