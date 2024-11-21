import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQ() {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        <AccordionItem value="item-1">
          <AccordionTrigger>What types of documents should I upload?</AccordionTrigger>
          <AccordionContent>
            You should upload any insurance policies related to your property, as well as any documentation of the damage caused by the disaster.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>How long does the claim process usually take?</AccordionTrigger>
          <AccordionContent>
            The claim process duration can vary depending on the complexity of your case. Typically, it can take anywhere from a few weeks to a few months.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>What if my claim is denied?</AccordionTrigger>
          <AccordionContent>
            If your claim is denied, you have the right to appeal the decision. We recommend consulting with a legal professional specializing in insurance claims for guidance.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  )
}

