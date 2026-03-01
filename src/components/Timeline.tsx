import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss';

function Timeline() {
  return (
    <section className="timeline-section" id="history">
      <div className="container">
        <h2 className="section-title animate-fade-in">Career History</h2>
        <VerticalTimeline lineColor="var(--border-color)">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: 'var(--bg-primary)',
              color: 'var(--text-primary)',
              border: '1px solid var(--border-color)',
              boxShadow: 'var(--shadow-md)',
              borderRadius: 'var(--radius-lg)'
            }}
            contentArrowStyle={{ borderRight: '7px solid var(--border-color)' }}
            date="2024 - Present"
            iconStyle={{ background: 'var(--accent-primary)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Database and Cloud Integration</h3>
            <h4 className="vertical-timeline-element-subtitle">Personal Project</h4>
            <p>
              SQL Database Management, Cloud Integration, Data Migration, Performance Tuning
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: 'var(--bg-primary)',
              color: 'var(--text-primary)',
              border: '1px solid var(--border-color)',
              boxShadow: 'var(--shadow-md)',
              borderRadius: 'var(--radius-lg)'
            }}
            contentArrowStyle={{ borderRight: '7px solid var(--border-color)' }}
            date="2022 - Present"
            iconStyle={{ background: 'var(--accent-primary)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Fullstack web development</h3>
            <h4 className="vertical-timeline-element-subtitle">Nepal</h4>
            <p>
              Full-stack Web Development, API Development, Database Management, Cloud Integration
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{
              background: 'var(--bg-primary)',
              color: 'var(--text-primary)',
              border: '1px solid var(--border-color)',
              boxShadow: 'var(--shadow-md)',
              borderRadius: 'var(--radius-lg)'
            }}
            contentArrowStyle={{ borderRight: '7px solid var(--border-color)' }}
            date="2023 - Present"
            iconStyle={{ background: 'var(--accent-primary)', color: '#fff' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Microsoft Learn Student Ambassador</h3>
            <h4 className="vertical-timeline-element-subtitle">Remote</h4>
            <p>
              Student Ambassador Program, Community Engagement, Technical Workshops
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default Timeline;
