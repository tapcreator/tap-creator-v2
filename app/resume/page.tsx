import Image from 'next/image'
import Link from 'next/link'
import profileData from '@/profile.json'

const showProject = false
const showCourses = false

export default function Home() {
  return (
    <>
      <main className="pt-6 pb-2 px-4 sm:p-6 md:pt-10 md:pb-2 md:px-8">

        <div className="backdrop-blur-md bg-white/60 lg:shadow-[0_0_35px_0_rgba(0,0,0,0.1)] lg:mt-5 p-0 lg:p-10 max-w-4xl gap-2 mx-auto grid grid-cols-1 md:max-w-5xl md:gap-x-3 md:grid-cols-[2fr_1fr]">

          <div className="mb-3 flex flex-col justify-center">
            <p className="text-4xl md:text-6xl font-semibold tracking-wider">{profileData.fullname}</p>
            <p className="mt-3 ms-1 text-2xl md:text-4xl tracking-wider">{profileData.headtag}</p>
          </div>

          <div className="mb-3 hidden md:grid md:place-content-center">
            <Image src={profileData.photo} className="rounded-full" width="200" height="200" alt="Tap Photo" />
          </div>

          <p className="mt-3 text-sm leading-relaxed">{profileData.summary}</p>

          <div className="mt-3 md:mt-0">
            <p className="text-sm mt-2"><span className="font-semibold">Phone</span>: <a href={`tel:${profileData.phone}`}>{profileData.phone}</a></p>
            <p className="text-sm mt-2"><span className="font-semibold">Email</span>: <a href={`mailto:${profileData.email}`}>{profileData.email}</a></p>
            <p className="text-sm mt-2"><span className="font-semibold">Website</span>: <a href={profileData.website}>{profileData.website}</a></p>
            <p className="text-sm mt-2"><span className="font-semibold">Location</span>: <a href={`https://www.google.co.th/maps/place/${profileData.location}`}>{profileData.location}</a></p>
          </div>

          <div className="mt-3">
            <h2 className="text-xl tracking-wide font-semibold underline">Experience</h2>
            {
              profileData.experience.map(item => {
                const slug = item.title.toLocaleLowerCase().replace(" ", "_")
                let running = 0
                return (
                  <div key={slug} className="mt-3 mb-1">
                    <p className="font-semibold">{item.title}</p>
                    <p className="text-sm">{item.company}</p>
                    <p className="text-sm">{item.date.start} - {item.date.end}</p>
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
                  </div>
                )
              })
            }
          </div>

          <div>

            <div className="mt-3">
              <h2 className="text-xl tracking-wide font-semibold underline">Skills</h2>
              {
                profileData.skills.map(item => {
                  const slug = item.category.toLocaleLowerCase().replace(" ", "_")
                  return (
                    <div key={slug} className="mt-2 text-sm">
                      <p><span className="font-semibold">{item.category}</span>: {item.list.map(skill_item => skill_item).join(', ')}</p>
                    </div>
                  )
                })
              }
            </div>

            <div className="mt-5">
              <h2 className="text-xl tracking-wide font-semibold underline">Education</h2>
              {
                profileData.education.map(item => (
                  <div key={item.faculty.toLocaleLowerCase().replace(" ", "_")} className="mt-2">
                    <p className="font-semibold">{item.faculty} ({item.degree})</p>
                    <p className="text-sm mt-1">{item.institute}</p>
                    <p className="text-sm mt-1">{item.year.start} - {item.year.end}</p>
                  </div>
                ))
              }
            </div>

            <div className="mt-5">
              <h2 className="text-xl tracking-wide font-semibold underline">Language</h2>
              {
                profileData.language.map(item => (
                  <div key={item.name.toLocaleLowerCase().replace(" ", "_")} className="mt-2">
                    <p className="text-sm font-semibold mt-2">{item.name}</p>
                    <p className="text-sm mt-1">{item.level}</p>
                  </div>
                ))
              }
            </div>

            <div className="mt-5">
              <h2 className="text-xl tracking-wide font-semibold underline">Interest</h2>
              <div className="text-sm mt-2">{profileData.interest.map(item => item.title).join(', ')}</div>
            </div>

          </div>

          {
            showProject &&
            (<div className="mt-3">
              <h2 className="text-xl tracking-wide font-semibold underline">Project</h2>
              {
                profileData.projects.map(item => {
                  const slug = item.name.toLocaleLowerCase().replace(" ", "_")
                  let running = 0
                  return (
                    <div key={slug} className="mt-3">
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm">{item.date.start} - {item.date.end}</p>
                      <p className="text-sm mt-1 text-sky-600"><a href={item.url}>{item.url}</a></p>
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
                  )
                })
              }
            </div>)
          }



          {
            showCourses &&
            (<div className="mt-3">
              <h2 className="text-xl tracking-wide font-semibold underline">Courses</h2>

              {
                profileData.courses.map(item => {
                  const slug = item.name.toLocaleLowerCase().replace(" ", "_")
                  return (
                    <div key={slug} className="mt-3">
                      <p className="font-semibold">{item.name}</p>
                      <p className="text-sm">{item.institute}</p>
                      <p className="text-sm mt-1 text-sky-600"><a href={item.url}>{item.url}</a></p>
                    </div>
                  )
                })
              }

            </div>)
          }

        </div>

      </main>

      <div className="py-7 text-center">
        <Link href="/" className="button">
          Back
        </Link>
      </div>
    </>
  )
}
