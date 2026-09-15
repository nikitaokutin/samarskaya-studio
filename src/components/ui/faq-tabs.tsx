import React, { useState } from 'react'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
import { Plus } from 'lucide-react'
import { cn } from '@/lib/utils'

export type FAQItemData = { question: string; answer: string }

export type FAQProps<K extends string = string> = React.HTMLAttributes<HTMLElement> & {
  title?: string
  subtitle?: string
  categories: Record<K, string>
  faqData: Record<K, FAQItemData[]>
}

// Main reusable FAQ component
export function FAQ<K extends string>({
  title = 'FAQs',
  subtitle = 'Frequently Asked Questions',
  categories,
  faqData,
  className,
  ...props
}: FAQProps<K>) {
  const categoryKeys = Object.keys(categories) as K[]
  const [selectedCategory, setSelectedCategory] = useState<K>(categoryKeys[0])

  return (
    <section
      className={cn('relative overflow-hidden bg-background px-4 py-12 text-foreground', className)}
      {...props}
    >
      <FAQHeader title={title} subtitle={subtitle} />
      <FAQTabs categories={categories} selected={selectedCategory} setSelected={setSelectedCategory} />
      <FAQList faqData={faqData} selected={selectedCategory} />
    </section>
  )
}

const FAQHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
  <div className="relative z-10 flex flex-col items-center justify-center text-center">
    <span className="mb-4 font-medium text-primary">{subtitle}</span>
    <h2 className="mb-8 text-3xl font-semibold tracking-tight md:text-5xl">{title}</h2>
    <span className="pointer-events-none absolute -top-[350px] left-[50%] z-0 h-[500px] w-[600px] max-w-[100vw] -translate-x-[50%] rounded-full bg-gradient-to-r from-primary/10 to-primary/5 blur-3xl" />
  </div>
)

function FAQTabs<K extends string>({
  categories,
  selected,
  setSelected,
}: {
  categories: Record<K, string>
  selected: K
  setSelected: (k: K) => void
}) {
  const reduce = useReducedMotion()
  return (
    <div className="relative z-10 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
      {(Object.entries(categories) as [K, string][]).map(([key, label]) => (
        <button
          key={key}
          type="button"
          onClick={() => setSelected(key)}
          aria-pressed={selected === key}
          className={cn(
            'relative overflow-hidden whitespace-nowrap rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-500 active:scale-[0.98]',
            selected === key
              ? 'border-primary text-primary-foreground'
              : 'border-border bg-card text-muted-foreground hover:text-foreground',
          )}
        >
          <span className="relative z-10">{label}</span>
          <AnimatePresence>
            {selected === key && (
              <motion.span
                initial={reduce ? false : { y: '100%' }}
                animate={{ y: '0%' }}
                exit={reduce ? undefined : { y: '100%' }}
                transition={{ duration: 0.5, ease: 'backIn' }}
                className="absolute inset-0 z-0 bg-gradient-to-r from-primary to-primary-hover"
              />
            )}
          </AnimatePresence>
        </button>
      ))}
    </div>
  )
}

function FAQList<K extends string>({ faqData, selected }: { faqData: Record<K, FAQItemData[]>; selected: K }) {
  const reduce = useReducedMotion()
  return (
    <div className="mx-auto mt-10 max-w-3xl">
      <AnimatePresence mode="wait">
        {(Object.entries(faqData) as [K, FAQItemData[]][]).map(([category, questions]) => {
          if (selected === category) {
            return (
              <motion.div
                key={category}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, ease: 'backIn' }}
                className="space-y-3"
              >
                {questions.map((faq, index) => (
                  <FAQItem key={index} {...faq} />
                ))}
              </motion.div>
            )
          }
          return null
        })}
      </AnimatePresence>
    </div>
  )
}

const FAQItem = ({ question, answer }: FAQItemData) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <motion.div
      animate={isOpen ? 'open' : 'closed'}
      className={cn('rounded-2xl border transition-colors', isOpen ? 'bg-muted/50' : 'bg-card')}
    >
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 p-4 text-left sm:p-5"
      >
        <span
          className={cn(
            'text-base font-medium transition-colors sm:text-lg',
            isOpen ? 'text-foreground' : 'text-muted-foreground',
          )}
        >
          {question}
        </span>
        <motion.span
          variants={{
            open: { rotate: '45deg' },
            closed: { rotate: '0deg' },
          }}
          transition={{ duration: 0.2 }}
          className="shrink-0"
        >
          <Plus className={cn('h-5 w-5 transition-colors', isOpen ? 'text-foreground' : 'text-muted-foreground')} />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : '0px',
          marginBottom: isOpen ? '16px' : '0px',
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden px-4 sm:px-5"
      >
        <p className="text-muted-foreground leading-relaxed">{answer}</p>
      </motion.div>
    </motion.div>
  )
}
