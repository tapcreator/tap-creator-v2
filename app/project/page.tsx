import Link from 'next/link'
import Image from 'next/image'
import profileData from '@/profile.json'

export default function Project() {
    const { projects } = profileData
    return (
        <main className="flex flex-col justify-center p-2 items-center">
            <div className="mt-5">
              <h2 className="text-3xl tracking-wide font-semibold underline mb-5">Project</h2>
              {
                projects.map(item => {
                  const slug = item.name.toLocaleLowerCase().replace(" ", "_")
                  let running = 0
                  return (
                    <div key={slug} className="mt-12 mb-4 grid grid-cols-1 md:grid-cols-3 max-w-5xl gap-2 md:gap-6 mx-auto">
                      <div className="">
                        <Image src={`/assets/projects/${item.image}`} alt="" className="w-full h-full object-cover rounded-lg  ease-in-out duration-500 md:hover:scale-150" width={1600} height={900} priority={true} />
                      </div>
                      <div className="md:col-span-2">
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-sm">{item.date.start} - {item.date.end}</p>
                        {
                            (item.url !== "") &&
                            (<p className="text-sm mt-1 text-sky-600"><a href={item.url}>{item.url}</a></p>)
                        }
                        <ul className="text-sm list-disc ps-5 mt-2">
                            {
                            item.detail.map(detail_item => {
                                running++
                                return (
                                <li key={`${slug}-detail-item-${running}`}>{detail_item}</li>
                                )
                            })
                            }
                        </ul>
                        <div className="text-xs mt-2">{item.technologies.map(item => (`[${item}]`)).join(' ')}</div>
                      </div>
                    </div>
                  )
                })
              }
            </div>

            <div className="py-7 text-center">
                <Link href="/" className="button">
                    Back
                </Link>
            </div>

        </main>
    )

}