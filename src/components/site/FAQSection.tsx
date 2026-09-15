import { FAQ } from '@/components/ui/faq-tabs'
import { faqCategories, faqData } from '@/content/faq'

export function FAQSection() {
  return (
    <div id="faq" className="scroll-mt-20">
      <FAQ
        title="Часто задаваемые вопросы"
        subtitle="Отвечаем до записи"
        categories={faqCategories}
        faqData={faqData}
        className="py-16 lg:py-24"
      />
    </div>
  )
}
