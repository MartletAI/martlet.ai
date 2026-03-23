import fs from 'fs'
import path from 'path'
import Markdown from 'react-markdown'

import { SmartLink } from '@/components/cta/smart-link'

export async function Contents() {
  const filePath = path.join(process.cwd(), 'src/app/terms-of-services/components/terms-of-service.md')
  const content = await fs.promises.readFile(filePath, 'utf8')

  return(
    <section className="pb-10 pt-[156px]">
      <div className="container-main">
        <div className="prose prose-lg max-w-none prose-headings:font-bold prose-h1:text-4xl prose-h2:text-2xl prose-h2:mt-10">
          <Markdown components={{
            a: (props) => {
              const { node, ...rest } = props;
              void node;
              const isMailto = rest.href?.startsWith('mailto:')
              if (isMailto) {
                return (
                  <SmartLink href="/contact" className="text-primary hover:text-primary-hover font-medium underline transition-colors">
                    {rest.children}
                  </SmartLink>
                )
              }
              return <a {...rest} className="text-primary hover:text-primary-hover font-medium underline transition-colors" />
            }
          }}>{content}</Markdown>
        </div>
      </div>
    </section>
  )
}
