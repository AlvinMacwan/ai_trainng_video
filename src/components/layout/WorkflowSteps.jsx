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
    <div className="w-full max-w-xl mx-auto">
      <div className="flex items-center justify-between w-full relative">
        {steps.map((step, index) => {
          const isActive = step.number === activeStep;
          const isCompleted = step.number < activeStep;
          const isLast = index === steps.length - 1;

          return (
            <React.Fragment key={step.number}>
              {/* Step indicator node */}
              <div 
                onClick={() => onStepClick && onStepClick(step.number)}
                className="flex flex-col items-center cursor-pointer group focus:outline-none z-10 select-none flex-shrink-0"
                role="button"
                tabIndex={0}
                aria-label={`Workflow step ${step.number}: ${step.label}`}
              >
                {/* Circle - prominent 36px diameter */}
                <div 
                  className={`w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-200 ${
                    isActive || isCompleted
                      ? 'bg-[#138A63] text-white shadow-sm ring-4 ring-[#E8F5F0]' 
                      : 'bg-[#E2E8F0] text-slate-500 group-hover:bg-slate-300'
                  }`}
                >
                  {isCompleted ? <Check size={16} strokeWidth={3} /> : step.number}
                </div>

                {/* Label */}
                <span 
                  className={`text-xs mt-1.5 transition-colors tracking-tight ${
                    isActive 
                      ? 'text-[#138A63] font-bold' 
                      : isCompleted
                      ? 'text-[#0A2540] font-semibold'
                      : 'text-slate-400 font-medium group-hover:text-slate-600'
                  }`}
                >
                  {step.label}
                </span>
              </div>

              {/* Flexible connecting line between steps */}
              {!isLast && (
                <div className="flex-1 min-w-[28px] max-w-[85px] mx-2 h-[3px] -mt-5 relative rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-[#E2E8F0]" />
                  {step.number === 1 && activeStep === 1 && (
                    <div className="absolute left-0 top-0 bottom-0 w-3 bg-[#138A63]" />
                  )}
                  {step.number < activeStep && (
                    <div className="absolute inset-0 bg-[#138A63]" />
                  )}
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
