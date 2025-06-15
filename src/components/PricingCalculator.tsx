
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calculator, Plus, Minus, IndianRupee } from "lucide-react";

const PricingCalculator = () => {
  const [items, setItems] = useState({
    washFold: 0,
    shirts: 0,
    pants: 0,
    dresses: 0,
    suits: 0,
    comforters: 0
  });

  const prices = {
    washFold: 100, // per kg
    shirts: 299,
    pants: 499,
    dresses: 899,
    suits: 1399,
    comforters: 1799
  };

  const updateItem = (item: keyof typeof items, increment: boolean) => {
    setItems(prev => ({
      ...prev,
      [item]: Math.max(0, prev[item] + (increment ? 1 : -1))
    }));
  };

  const calculateTotal = () => {
    let total = 0;
    total += items.washFold * prices.washFold;
    total += items.shirts * prices.shirts;
    total += items.pants * prices.pants;
    total += items.dresses * prices.dresses;
    total += items.suits * prices.suits;
    total += items.comforters * prices.comforters;
    return total.toLocaleString('en-IN');
  };

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="w-5 h-5 text-blue-600" />
          Pricing Calculator
        </CardTitle>
        <CardDescription>
          Estimate your laundry costs
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div>
              <p className="font-medium">Wash & Fold (kg)</p>
              <p className="text-sm text-gray-500">₹{prices.washFold}/kg</p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => updateItem('washFold', false)}
                className="h-8 w-8"
              >
                <Minus className="w-4 h-4" />
              </Button>
              <span className="w-8 text-center">{items.washFold}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => updateItem('washFold', true)}
                className="h-8 w-8"
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div>
              <p className="font-medium">Dress Shirts</p>
              <p className="text-sm text-gray-500">₹{prices.shirts} each</p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => updateItem('shirts', false)}
                className="h-8 w-8"
              >
                <Minus className="w-4 h-4" />
              </Button>
              <span className="w-8 text-center">{items.shirts}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => updateItem('shirts', true)}
                className="h-8 w-8"
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div>
              <p className="font-medium">Pants/Trousers</p>
              <p className="text-sm text-gray-500">₹{prices.pants} each</p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => updateItem('pants', false)}
                className="h-8 w-8"
              >
                <Minus className="w-4 h-4" />
              </Button>
              <span className="w-8 text-center">{items.pants}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => updateItem('pants', true)}
                className="h-8 w-8"
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div>
              <p className="font-medium">Dresses</p>
              <p className="text-sm text-gray-500">₹{prices.dresses} each</p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => updateItem('dresses', false)}
                className="h-8 w-8"
              >
                <Minus className="w-4 h-4" />
              </Button>
              <span className="w-8 text-center">{items.dresses}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => updateItem('dresses', true)}
                className="h-8 w-8"
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div>
              <p className="font-medium">Suits</p>
              <p className="text-sm text-gray-500">₹{prices.suits} each</p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => updateItem('suits', false)}
                className="h-8 w-8"
              >
                <Minus className="w-4 h-4" />
              </Button>
              <span className="w-8 text-center">{items.suits}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => updateItem('suits', true)}
                className="h-8 w-8"
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-between p-3 border rounded-lg">
            <div>
              <p className="font-medium">Comforters</p>
              <p className="text-sm text-gray-500">₹{prices.comforters} each</p>
            </div>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="icon"
                onClick={() => updateItem('comforters', false)}
                className="h-8 w-8"
              >
                <Minus className="w-4 h-4" />
              </Button>
              <span className="w-8 text-center">{items.comforters}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => updateItem('comforters', true)}
                className="h-8 w-8"
              >
                <Plus className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t pt-4">
          <div className="flex justify-between items-center text-lg font-bold">
            <span>Estimated Total:</span>
            <span className="text-blue-600 flex items-center gap-1">
              <IndianRupee className="w-4 h-4" />
              {calculateTotal()}
            </span>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            *Prices are estimates. Final cost may vary based on actual items and condition.
          </p>
        </div>
      </CardContent>
    </Card>
  );
};

export default PricingCalculator;
