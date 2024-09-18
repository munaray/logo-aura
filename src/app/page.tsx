import Header from "@/components/Header";
import SideNav from "@/components/SideNav";

export default function Home() {
	return (
		<>
			<Header />
			<div className="w-64 fixed">
				<SideNav selectedIndex={(value) => console.log(value)} />
			</div>
			<div className="ml-64">Body</div>
		</>
	);
}
