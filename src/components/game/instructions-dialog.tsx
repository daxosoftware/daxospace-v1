import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Info } from 'lucide-react';

const InstructionItem = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center space-x-2 text-gray-400">
    {children}
  </div>
);

export function InstructionsDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button 
          variant="outline" 
          size="lg"
          className="border-gray-700 hover:bg-gray-800"
        >
          <Info className="mr-2 h-5 w-5" /> How to Play
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-gray-900 border-gray-800">
        <DialogHeader>
          <DialogTitle>Game Instructions</DialogTitle>
          <DialogDescription asChild>
            <div className="space-y-4 mt-4">
              <InstructionItem>🎮 Use arrow keys or WASD to move your ship</InstructionItem>
              <InstructionItem>🎯 Press SPACE to shoot at enemies</InstructionItem>
              <InstructionItem>💫 Collect power-ups to enhance your abilities</InstructionItem>
              <InstructionItem>🏆 Defeat enemies to earn points and climb the leaderboard</InstructionItem>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}