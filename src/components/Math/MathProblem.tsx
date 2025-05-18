
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertCircle, CheckCircle } from 'lucide-react';

interface MathProblemProps {
  id: string;
  question: string;
  solution: string;
  answer: string | number;
  explanation: string;
}

const MathProblem: React.FC<MathProblemProps> = ({
  id,
  question,
  solution,
  answer,
  explanation,
}) => {
  const [userAnswer, setUserAnswer] = useState('');
  const [showSolution, setShowSolution] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);

  const handleSubmit = () => {
    const normalizedUserAnswer = userAnswer.trim();
    const normalizedCorrectAnswer = String(answer).trim();
    
    const correct = normalizedUserAnswer === normalizedCorrectAnswer;
    setIsCorrect(correct);
    
    if (correct) {
      // Could implement some reward/feedback system here
    } else {
      setShowSolution(true);
    }
  };

  const handleAskForHelp = () => {
    // This would integrate with the AI avatar help system
    console.log('Requesting AI help for problem:', id);
  };

  return (
    <Card className="shadow-md border-keen-gray">
      <CardHeader className="bg-gray-50 border-b border-keen-gray">
        <CardTitle className="text-lg font-medium">Problem {id}</CardTitle>
      </CardHeader>
      <CardContent className="pt-6 space-y-4">
        <div className="text-lg">{question}</div>
        
        {isCorrect !== null && (
          <div className={`flex items-center p-3 rounded-md ${isCorrect ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
            {isCorrect ? (
              <CheckCircle className="h-5 w-5 mr-2" />
            ) : (
              <AlertCircle className="h-5 w-5 mr-2" />
            )}
            <span>{isCorrect ? 'Correct! Great job!' : 'Not quite right. Try again or check the solution.'}</span>
          </div>
        )}
        
        {showSolution && (
          <div className="bg-blue-50 p-4 rounded-md">
            <p className="font-medium text-keen-dark mb-2">Solution:</p>
            <div className="space-y-2">
              <p>{solution}</p>
              <p className="mt-2 font-medium">Answer: {answer}</p>
              <p className="mt-2 text-sm text-gray-600">{explanation}</p>
            </div>
          </div>
        )}
        
        <div className="space-y-2">
          <label htmlFor={`answer-${id}`} className="block text-sm font-medium">
            Your Answer:
          </label>
          <Input
            id={`answer-${id}`}
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            placeholder="Enter your answer here"
            className="w-full"
          />
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline" onClick={handleAskForHelp}>
          Ask for Help
        </Button>
        <Button className="bg-keen-dark hover:bg-keen-medium" onClick={handleSubmit}>
          Submit Answer
        </Button>
      </CardFooter>
    </Card>
  );
};

export default MathProblem;
