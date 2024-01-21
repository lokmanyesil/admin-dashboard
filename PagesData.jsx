import { CreditCardIcon, HomeIcon, NewspaperIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/outline"
import { AiOutlineApartment } from "react-icons/ai";
import { CiLogin } from "react-icons/ci";
const pages = [
	{
		id: 1,
		url: "/",
		name: "Ana Sayfa",
		target: "_self",
		active: true,
		icon: <HomeIcon className="h-5 w-5" />,
	},
	{
		id: 2,
		url: "/application",
		name: "Başvuru İşlemleri",
		target: "_self",
		active: true,
		icon: <NewspaperIcon className="h-5 w-5" />,
	},
	{
		id: 3,
		url: "/dealerDebtPenaltyProcedures",
		name: "Bayi Borç - Ceza İşlemleri",
		target: "_self",
		active: true,
		icon: <CreditCardIcon className="h-5 w-5" />,
	},
	{
		id: 4,
		url: "/dealerTransactions",
		name: "Bayi İşlemleri",
		target: "_self",
		active: true,
		icon: <AiOutlineApartment className="h-5 w-5" />,
	},
];

export { pages };

