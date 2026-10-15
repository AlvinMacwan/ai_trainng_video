import React from 'react';

export const WorkflowSteps = ({ activeStep = 1, onStepClick }) => {
  const steps = [
    { number: 1, label: 'Prompt' },
    { number: 2, label: 'Content' },
    { number: 3, label: 'Visuals' },
    { number: 4, label: 'Preview' },
    { number: 5, label: 'Export' },
  ];

  return (
    <div className="w-full py-1">
      <div className="flex items-center justify-between max-w-xl mx-auto relative">
        {steps.map((step, index) => {
          const isActive = step.number === activeStep;
          const isCompleted = step.number < activeStep;
          const isLast = index === steps.length - 1;

          return (
            <React.Fragment key={step.number}>
              {/* Step indicator node */}
              <div 
                onClick={() => onStepClick && onStepClick(step.number)}
                className="flex flex-col items-center cursor-pointer group focus:outline-none z-10"
                role="button"
                tabIndex={0}
              >
                {/* Circle */}
                <div 
                  className={`w-7 h-7 rounded-full flex items-center justify-center text-[11px] font-bold transition-all duration-200 ${
                    isActive || isCompleted
                      ? 'bg-[#138A63] text-white shadow-xs' 
                      : 'bg-[#E2E8F0] text-slate-400 group-hover:bg-slate-300'
                  }`}
                >
                  {step.number}
                </div>

                {/* Label */}
                <span 
                  className={`text-[11px] mt-1.5 transition-colors ${
                    isActive 
                      ? 'text-[#138A63] font-semibold' 
                      : 'text-slate-400 font-medium group-hover:text-slate-600'
                  }`}
                >
                  {step.label}
                </span>
              </div>

              {/* Connecting line */}
              {!isLast && (
                <div className="flex-1 mx-2 h-[2px] -mt-5 relative">
                  <div className="absolute inset-0 bg-[#E2E8F0]" />
                  {/* Subtle active segment if on step 1 */}
                  {step.number === 1 && (
                    <div className="absolute left-0 top-0 bottom-0 w-8 bg-[#138A63]" />
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
