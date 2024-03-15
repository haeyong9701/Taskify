import { NavLink } from 'react-router-dom';
import { Dashboard } from '../../types/api';

export default function DashboardItem({ dashboard }: { dashboard: Dashboard }) {
  const colorVariants: Record<string, string> = {
    '#7AC555': 'bg-green',
    '#760DDE': 'bg-purple',
    '#FFA500': 'bg-orange',
    '#76A5EA': 'bg-blue',
    '#E876EA': 'bg-pink'
  };

  const navLinkStyled =
    'w-[4rem] h-[4rem] rounded-[0.4rem] flex justify-center items-center cursor-pointer tablet:gap-[1.6rem] tablet:w-[13.4rem] tablet:h-[4.3rem] tablet:justify-start tablet:pl-[1rem] desktop:w-[27.6rem] desktop:h-[4.5rem] desktop:pl-[1.2rem]';

  return (
    <NavLink
      to={`/dashboard/${dashboard.id}`}
      className={({ isActive }) =>
        isActive ? `${navLinkStyled} bg-violet_8` : `${navLinkStyled}`
      }
    >
      <div
        className={`${colorVariants[dashboard.color] ?? 'bg-green'} w-[0.8rem] h-[0.8rem] rounded-full`}
      />
      <div className="flex items-center gap-[0.4rem] mobile:hidden tablet:flex desktop:gap-[0.6rem]">
        <div className="max-w-[7rem] text-[1.6rem] font-bold text-gray_787486 overflow-hidden text-ellipsis whitespace-nowrap	desktop:max-w-[22rem]">
          {dashboard.title}
        </div>
        {dashboard.createdByMe ? (
          <img
            className="w-[1.7rem] h-[1.4rem]"
            src="/images/crown.svg"
            alt="내가 만든 대시보드를 표시하는 크라운 이미지"
          />
        ) : null}
      </div>
    </NavLink>
  );
}
