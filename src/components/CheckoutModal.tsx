import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { CreditCard, Truck, CheckCircle } from "lucide-react";

interface CartItem {
  id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onOrderComplete: () => void;
}

const CheckoutModal = ({ isOpen, onClose, items, onOrderComplete }: CheckoutModalProps) => {
  const [step, setStep] = useState<"shipping" | "payment" | "success">("shipping");
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const [shippingInfo, setShippingInfo] = useState({
    fullName: "",
    address: "",
    city: "",
    zipCode: "",
    phone: "",
  });

  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
    expiry: "",
    cvv: "",
    cardName: "",
  });

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 50 ? 0 : 5.99;
  const total = subtotal + shipping;

  const handleShippingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("payment");
  };

  const handlePaymentSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsProcessing(false);
    setStep("success");

    toast({
      title: "Order Placed Successfully!",
      description: "You will receive a confirmation email shortly.",
    });
  };

  const handleClose = () => {
    if (step === "success") {
      onOrderComplete();
      setStep("shipping");
      setShippingInfo({ fullName: "", address: "", city: "", zipCode: "", phone: "" });
      setPaymentInfo({ cardNumber: "", expiry: "", cvv: "", cardName: "" });
    }
    onClose();
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, "").replace(/[^0-9]/gi, "");
    const matches = v.match(/\d{4,16}/g);
    const match = (matches && matches[0]) || "";
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    return parts.length ? parts.join(" ") : value;
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-lg max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl text-center">
            {step === "shipping" && "Shipping Details"}
            {step === "payment" && "Payment Details"}
            {step === "success" && "Order Confirmed!"}
          </DialogTitle>
        </DialogHeader>

        {/* Progress Steps */}
        <div className="flex items-center justify-center gap-4 mb-6">
          <div className={`flex items-center gap-2 ${step === "shipping" ? "text-primary" : "text-muted-foreground"}`}>
            <Truck className={`h-5 w-5 ${step !== "shipping" && step !== "success" ? "" : step === "success" ? "text-green-500" : ""}`} />
            <span className="text-sm font-medium">Shipping</span>
          </div>
          <div className="h-px w-8 bg-border" />
          <div className={`flex items-center gap-2 ${step === "payment" ? "text-primary" : step === "success" ? "text-green-500" : "text-muted-foreground"}`}>
            <CreditCard className="h-5 w-5" />
            <span className="text-sm font-medium">Payment</span>
          </div>
          <div className="h-px w-8 bg-border" />
          <div className={`flex items-center gap-2 ${step === "success" ? "text-green-500" : "text-muted-foreground"}`}>
            <CheckCircle className="h-5 w-5" />
            <span className="text-sm font-medium">Done</span>
          </div>
        </div>

        {step === "shipping" && (
          <form onSubmit={handleShippingSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                value={shippingInfo.fullName}
                onChange={(e) => setShippingInfo({ ...shippingInfo, fullName: e.target.value })}
                placeholder="John Doe"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="address">Address</Label>
              <Input
                id="address"
                value={shippingInfo.address}
                onChange={(e) => setShippingInfo({ ...shippingInfo, address: e.target.value })}
                placeholder="123 Main Street"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  value={shippingInfo.city}
                  onChange={(e) => setShippingInfo({ ...shippingInfo, city: e.target.value })}
                  placeholder="New York"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="zipCode">Zip Code</Label>
                <Input
                  id="zipCode"
                  value={shippingInfo.zipCode}
                  onChange={(e) => setShippingInfo({ ...shippingInfo, zipCode: e.target.value })}
                  placeholder="10001"
                  required
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input
                id="phone"
                type="tel"
                value={shippingInfo.phone}
                onChange={(e) => setShippingInfo({ ...shippingInfo, phone: e.target.value })}
                placeholder="+1 234 567 8900"
                required
              />
            </div>
            <Button variant="hero" type="submit" className="w-full">
              Continue to Payment
            </Button>
          </form>
        )}

        {step === "payment" && (
          <form onSubmit={handlePaymentSubmit} className="space-y-4">
            {/* Order Summary */}
            <div className="bg-muted/50 rounded-lg p-4 mb-4">
              <h4 className="font-medium mb-2">Order Summary</h4>
              <div className="space-y-1 text-sm">
                {items.map((item) => (
                  <div key={item.id} className="flex justify-between">
                    <span>{item.name} x{item.quantity}</span>
                    <span>${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
                <div className="border-t border-border pt-2 mt-2">
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                  </div>
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="cardName">Name on Card</Label>
              <Input
                id="cardName"
                value={paymentInfo.cardName}
                onChange={(e) => setPaymentInfo({ ...paymentInfo, cardName: e.target.value })}
                placeholder="John Doe"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="cardNumber">Card Number</Label>
              <Input
                id="cardNumber"
                value={paymentInfo.cardNumber}
                onChange={(e) => setPaymentInfo({ ...paymentInfo, cardNumber: formatCardNumber(e.target.value) })}
                placeholder="1234 5678 9012 3456"
                maxLength={19}
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="expiry">Expiry Date</Label>
                <Input
                  id="expiry"
                  value={paymentInfo.expiry}
                  onChange={(e) => {
                    let value = e.target.value.replace(/\D/g, "");
                    if (value.length >= 2) {
                      value = value.slice(0, 2) + "/" + value.slice(2, 4);
                    }
                    setPaymentInfo({ ...paymentInfo, expiry: value });
                  }}
                  placeholder="MM/YY"
                  maxLength={5}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvv">CVV</Label>
                <Input
                  id="cvv"
                  type="password"
                  value={paymentInfo.cvv}
                  onChange={(e) => setPaymentInfo({ ...paymentInfo, cvv: e.target.value.replace(/\D/g, "").slice(0, 4) })}
                  placeholder="123"
                  maxLength={4}
                  required
                />
              </div>
            </div>
            <div className="flex gap-3">
              <Button variant="outline" type="button" onClick={() => setStep("shipping")} className="flex-1">
                Back
              </Button>
              <Button variant="hero" type="submit" className="flex-1" disabled={isProcessing}>
                {isProcessing ? "Processing..." : `Pay $${total.toFixed(2)}`}
              </Button>
            </div>
          </form>
        )}

        {step === "success" && (
          <div className="text-center py-8">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-green-500" />
            </div>
            <h3 className="font-display text-xl font-semibold mb-2">Thank You!</h3>
            <p className="text-muted-foreground mb-6">
              Your order has been placed successfully. We'll send you a confirmation email with tracking details.
            </p>
            <Button variant="hero" onClick={handleClose} className="w-full">
              Continue Shopping
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutModal;
