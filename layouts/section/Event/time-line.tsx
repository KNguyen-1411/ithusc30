import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import './vertical.css'
import EventData from '@/config/event-data.json'
import { LocateIcon } from 'lucide-react'
const lineColor = '#c1cfda'
const contentArrowStyle = {
  borderRight: 'none',
}

const iconStyle = {
  background: '#003056',
  scale: '0.4',
}

interface EventItem {
  title: string
  location: string
  time: string
}

const eventItems: EventItem[] = EventData

export default function TimelineSection() {
  return (
    <VerticalTimeline lineColor={lineColor} animate={true}>
      {eventItems.map((item, index) => (
        <VerticalTimelineElement
          visible={true}
          key={index}
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#dcf2ff', color: '#000' }}
          contentArrowStyle={contentArrowStyle}
          date={item.time}
          iconStyle={iconStyle}
        >
          <h1 className="vertical-timeline-element-title font-bold text-2xl pb-2 text-prussian-blue-800">
            {item.title}
          </h1>
          <h1 className="vertical-timeline-element-subtitle text-lg text-prussian-blue-950 flex">
            <LocateIcon size={20} className="mr-2 mt-1" />
            {item.location}
          </h1>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  )
}
