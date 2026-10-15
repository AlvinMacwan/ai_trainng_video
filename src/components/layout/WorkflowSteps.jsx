import React from 'react';
import { Check } from 'lucide-react';

export const WorkflowSteps = ({ activeStep = 1, onStepClick }) => {
  const steps = [
    { number: 1, label: 'Prompt' },
    { number: 2, label: 'Content' },
    { number: 3, label: 'Visuals' },
    { number: 4, label: 'Preview' },
    { number: 5, label: 'Export' },
  ];

  return (
    <div className="w-full bg-white rounded-xl border border-[#DCE5EA] px-6 py-4 shadow-2xs">
      <div className="flex items-center justify-between max-w-3xl mx-auto relative">
        {steps.map((step, index) => {
          const isActive = step.number === activeStep;
          const isCompleted = step.number < activeStep;
          const isLast = index === steps.length - 1;

          return (
            <React.Fragment key={step.number}>
              {/* Step indicator node */}
              <div 
                onClick={() => onStepClick && onStepClick(step.number)}
                className="flex flex-col items-center cursor-pointer group focus:outline-none"
                role="button"
                tabIndex={0}
                aria-label={`Workflow step ${step.number}: ${step.label}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    onStepClick && onStepClick(step.number);
                  }
                }}
              >
                {/* Circle */}
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-200 z-10 ${
                    isActive 
                      ? 'bg-[#138A63] text-white ring-4 ring-[#E8F5F0] shadow-xs scale-105' 
                      : isCompleted
                      ? 'bg-[#138A63] text-white'
                      : 'bg-[#E2E8F0] text-slate-500 group-hover:bg-slate-300'
                  }`}
                >
                  {isCompleted ? <Check size={14} className="stroke-[3]" /> : step.number}
                </div>

                {/* Label */}
                <span 
                  className={`text-xs mt-1.5 font-medium transition-colors ${
                    isActive 
                      ? 'text-[#138A63] font-semibold' 
                      : isCompleted
                      ? 'text-[#092C49]'
                      : 'text-slate-500 group-hover:text-slate-700'
                  }`}
                >
                  {step.label}
                </span>
              </div>

              {/* Connecting line */}
              {!isLast && (
                <div className="flex-1 mx-3 h-[2px] -mt-5 relative">
                  <div className="absolute inset-0 bg-[#E2E8F0]" />
                  <div 
                    className="absolute inset-0 bg-[#138A63] transition-all duration-300"
                    style={{
                      width: step.number < activeStep ? '100%' : '0%'
                    }}
                  />
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
