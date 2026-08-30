import styles from '@/components/Home/MemberCard/Card.module.css';
import type { MemberPros } from './types';
import CardFront from './MemberCard/CardFront';
import CardBack from './MemberCard/CardBack';

export default function MemberCard({
  member,
  index,
  flipDelay,
}: {
  member: MemberPros;
  index: number;
  flipDelay: number;
}) {
  return (
    <>
      <div
        className={`${styles.card} flex-1 gap-4 p-4`}
        style={{ '--drop-delay': `${index * 100}ms` } as React.CSSProperties}
      >
        <div
          className={`${styles.cardInner}`}
          style={{ '--flip-delay': `${flipDelay}ms` } as React.CSSProperties}
        >
          <div className={styles.cardFront}>
            <CardFront member={member} />
          </div>
          <div className={styles.cardBack}>
            <CardBack member={member} />
          </div>
        </div>
      </div>
    </>
  );
}
