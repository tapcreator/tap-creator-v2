'use client'
import Link from 'next/link'
import { Container } from '@mui/system'
import Timeline from '@mui/lab/Timeline'
import TimelineItem from '@mui/lab/TimelineItem'
import TimelineSeparator from '@mui/lab/TimelineSeparator'
import TimelineConnector from '@mui/lab/TimelineConnector'
import TimelineContent from '@mui/lab/TimelineContent'
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import TimelineDot from '@mui/lab/TimelineDot'
import LaptopMacIcon from '@mui/icons-material/LaptopMac'
import Typography from '@mui/material/Typography'
import { AppSettingsAlt, CameraOutdoor, ChildCare, OpenInBrowser, School, Terminal, Web } from '@mui/icons-material'

export default function Experience() {
  return (
    <>
      <Container>
        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent sx={{ m: 'auto 0' }} align="right" variant="h6" color="text.secondary">
              2023
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="secondary">
                <Terminal />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                Freelancer
              </Typography>
              <Typography>Full Stack Developer</Typography>
              <Typography variant="subtitle2">7+ years of experience in designing captivating user interfaces, optimizing web functionality, and improving workflow efficiencies.</Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="h6" color="text.secondary">
              2020 - 2022
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="info">
                <LaptopMacIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                Senior Pre-Sales Engineer
              </Typography>
              <Typography>Video Surveillance & Access Control</Typography>
              <Typography variant="subtitle2">Thermal camera, Video analytics, System integration, Storage, Networking, Wiring</Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent sx={{ m: 'auto 0' }} align="right" variant="h6" color="text.secondary">
              2019
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="error">
                <AppSettingsAlt />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                Senior Pre-Sales Engineer
              </Typography>
              <Typography>MDM Solutions (Ricoh x True x Samsung)</Typography>
              <Typography variant="subtitle2">Cloud-based sofware services for Samsung devices. It manages devices running Android.</Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="h6" color="text.secondary">
              2017 - 2018
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="primary">
                <OpenInBrowser />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                Senior Web Developer
              </Typography>
              <Typography>Improve the internal website and workflow.</Typography>
              <Typography variant="subtitle2">Model-View-Controller (MVC) Architecture, Responsive Design, Bootstrap (Front-end framework)</Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent sx={{ m: 'auto 0' }} align="right" variant="h6" color="text.secondary">
              2014 - 2016
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="warning">
                <CameraOutdoor />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                Pre-Sales Engineer
              </Typography>
              <Typography>Surveillance product</Typography>
              <Typography variant="subtitle2">Analog camera with DVR, Network camera with NVR, Basic access control, Software configuration, IT services.</Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="h6" color="text.secondary">
              2013
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="success">
                <LaptopMacIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                Full Stack Developer
              </Typography>
              <Typography>PHP, MSSQL, JQuery</Typography>
              <Typography variant="subtitle2">Get requirements from user, Design UI and mock up, Database admin, Unit testing, Sub-version control.</Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent sx={{ m: 'auto 0' }} align="right" variant="h6" color="text.secondary">
              2011 - 2012
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="info">
                <Web />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                Junior Web Developer
              </Typography>
              <Typography>Getting started with PHP, HTML, CSS</Typography>
              <Typography variant="subtitle2">Update static website, Create web form, Generate report from database.</Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent sx={{ m: 'auto 0' }} variant="h6" color="text.secondary">
              2010
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="error">
                <ChildCare />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                Graduate
              </Typography>
              <Typography>Let&apos;s start the journey!</Typography>
            </TimelineContent>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent sx={{ m: 'auto 0' }} align="right" variant="h6" color="text.secondary">
              2006 - 2009
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot color="secondary">
                <School />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="h6" component="span">
                Studying
              </Typography>
              <Typography>Computer Engineering</Typography>
              <Typography>KMITL</Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </Container>

      <div className="py-7 text-center">
        <Link href="/" className="button">
          Back
        </Link>
      </div>
    </>
  )
}
