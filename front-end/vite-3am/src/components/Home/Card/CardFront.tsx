import type { MemberPros } from '../types';

export default function CardFront({ member }: { member: MemberPros }) {
  return (
    <>
      <div
        className={`h-full rounded-xl border-2 text-white`}
        style={{ borderColor: `${member.mainColor}` }}
        key={member.id}
      >
        <div className="p-2 text-center text-2xl font-bold">{member.name}</div>
        <div>
          <img src="images/profiles/molala.webp" alt="TEST" />
        </div>
        <div className="flex">
          <div className="flex-1">
            <a>
              <img src="images/icons/chzzk-Icon_02.png" alt="Chzzk" />
            </a>
          </div>
          <div className="flex-1">
            <a>
              <img src="images/icons/navercafe.webp" alt="Naver Cafe" />
            </a>
          </div>
        </div>
        <div className="flex">
          <div className="flex-1">
            <a>
              <img src="images/icons/yt_icon_red_digital.png" alt="YouTube" />
            </a>
          </div>
          <div className="flex-1">
            <a>
              <img src="images/icons/x-logo-white.png" alt="X" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
