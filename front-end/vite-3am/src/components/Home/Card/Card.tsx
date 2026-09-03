import styles from './Card.module.css';
import type { MemberPros } from '../types';
import CardFront from './CardFront';
import CardBack from './CardBack';

export default function Card({
  index,
  isFlipped,
  onDropEnd,
  member,
}: {
  index: number;
  isFlipped: boolean;
  onDropEnd?: () => void;
  member: MemberPros;
}) {
  return (
    <>
      <div
        className={`${styles.card} flex-1 gap-4 p-4`}
        style={{ '--drop-delay': `${index * 500}ms` } as React.CSSProperties}
        onAnimationEnd={onDropEnd}
      >
        <div
          className={`aspect-7/16 ${styles.cardInner} ${isFlipped ? styles.flipped : ''}`}
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
