import React, { useState } from 'react'
import { Github, Mail, ArrowRight, CheckCircle2 } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "sonner"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const Footer = () => {
  const [email, setEmail] = useState('')
  const [showOtpDialog, setShowOtpDialog] = useState(false)
  const [otp, setOtp] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e) => {
    e.preventDefault()
    if (!email) {
      toast.error("Please enter your email address")
      return
    }
    setShowOtpDialog(true)
    toast.success("OTP Sent!", {
      description: "Please check your email for the verification code."
    })
  }

  const handleVerifyOtp = (e) => {
    e.preventDefault()
    if (!otp) {
      toast.error("Please enter the OTP")
      return
    }
    setShowOtpDialog(false)
    setIsSubscribed(true)
    toast.success("Subscribed Successfully!", {
      description: "You'll now receive our latest updates."
    })
  }

  return (
    <footer className="border-t border-border/40 bg-background/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Newsletter Section */}
        <div className="mb-12 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Stay Updated
          </h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Subscribe to our newsletter for the latest updates, features, and Git management tips.
          </p>
          {!isSubscribed ? (
            <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1"
                required
              />
              <Button type="submit" className="gap-2">
                Subscribe <ArrowRight className="w-4 h-4" />
              </Button>
            </form>
          ) : (
            <div className="flex items-center justify-center gap-2 text-primary">
              <CheckCircle2 className="w-5 h-5" />
              <span>Thanks for subscribing!</span>
            </div>
          )}
        </div>

        {/* Existing Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Features</li>
              <li>Documentation</li>
              <li>Pricing</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Community</li>
              <li>Contact</li>
              <li>Support</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4 text-foreground">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Privacy</li>
              <li>Terms</li>
              <li>License</li>
            </ul>
          </div>
        </div>
        <div className="flex items-center justify-between mt-12 pt-8 border-t border-border/40">
          <p className="text-sm text-muted-foreground">© 2024 TGit. All rights reserved.</p>
          <a href="https://github.com" className="text-foreground hover:text-primary">
            <Github className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* OTP Verification Dialog */}
      <Dialog open={showOtpDialog} onOpenChange={setShowOtpDialog}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Verify your email</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleVerifyOtp} className="space-y-4">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                Enter the verification code sent to {email}
              </p>
              <Input
                type="text"
                placeholder="Enter OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                maxLength={6}
                className="text-center text-lg tracking-widest"
                required
              />
            </div>
            <div className="flex justify-end">
              <Button type="submit">
                Verify
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </footer>
  )
}

export default Footer