import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Illustration from '../../Illustration'
import AdaKerjaLogo from '../../../assets/AdaKerja.png'
import MitraBukalapakLogo from '../../../assets/MitraBukalapak.png'
import ItbLogo from '../../../assets/ITB.jpg'
import useStyles from './styles'

interface ExperienceItem {
  title: string
  image: string
  duration: string
  subtitle: string
  description: string
  tags?: string[]
}

function Experiences() {
  const classes = useStyles()
  const workExperienceItems: ExperienceItem[] = [
    {
      title: 'AdaKerja',
      image: AdaKerjaLogo,
      duration: 'May 2020 - Present',
      subtitle: 'Fullstack Developer Intern & then Part-time',
      description:
        'Developed and maintained multiple product across multiple platforms (Mobile and PWA)',
      tags: [
        '#ReactJS',
        '#ReactNative',
        '#NodeJS',
        '#MongoDB',
        '#AWS',
        '#Fullstack'
      ],
    },
    {
      title: 'Mitra Bukalapak',
      image: MitraBukalapakLogo,
      duration: 'Jun 2019 - Aug 2019',
      subtitle: 'Software Engineer Intern',
      description: 'Developed Gamification to improve growth named MitraKuis.',
      tags: [
        '#RubyOnRails',
        '#MySQL',
        '#Web',
        '#BackEnd'
      ]
    }
  ]

  const educationItems: ExperienceItem[] = [
    {
      title: 'Institut Teknologi Bandung',
      image: ItbLogo,
      duration: '2017 - July 2021 (Expected)',
      subtitle: 'Informatics Engineering (Computer Science)',
      description: [
        'Web-Based Development',
        'Databases',
        'Algorithms and Data Structures',
        'Platform-Based Development',
        'Data Science and Data Mining',
        'Big Data',
        'Advanced Machine Learning',
        'Natural Language Processing',
        'Object-Oriented Programming'
      ].join(' • ')
    }
  ]

  const renderExperience = (item: ExperienceItem) => {
    return (
      <Grid item container alignItems='center' spacing={3}>
        <Grid item>
          <Illustration
            image={item.image}
            size={'small'}
            imageName={item.title}
          />
        </Grid>
        <Grid item xs container direction='column'>
          <Grid item xs alignItems='center'>
            <Typography variant='h5' className={classes.title}>
              {item.title}
            </Typography>
            <Typography variant='caption' className={classes.duration}>
              {item.duration}
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography gutterBottom className={classes.subtitle}>
              {item.subtitle}
            </Typography>
          </Grid>
          <Grid item xs>
            <Typography
              variant='body2'
              gutterBottom
              className={classes.description}
            >
              {item.description}
            </Typography>
            <br />
          </Grid>
          {(item.tags && item.tags.length > 0) && <Grid item xs>
            {item.tags.map(tag => {
              return (
                <Typography
                  variant='body2'
                  className={classes.tag}
                >
                  {tag}
                </Typography>
              )
            })
            }
          </Grid>
          }
        </Grid>
      </Grid>
    )
  }

  return (
    <Grid container spacing={3} id='about-me' direction='column'>
      <Grid item>
        <Typography variant='h4'>{`Work Experiences`}</Typography>
      </Grid>
      <Grid item container spacing={3}>
        {workExperienceItems.map(item => {
          return renderExperience(item)
        })}
      </Grid>
      <Grid item>
        <Typography variant='h4'>{`Education`}</Typography>
      </Grid>
      <Grid item container spacing={3}>
        {educationItems.map(educationItem => {
          return renderExperience(educationItem)
        })}
      </Grid>
    </Grid>
  )
}

export default Experiences
