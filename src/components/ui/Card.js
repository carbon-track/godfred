
export default function Card({ title, description, icon }) {
    return (
        <div className="group relative flex flex-col rounded-2xl border border-gray-200 p-8 transition-all hover:bg-gray-50/50 hover:shadow-sm">
            {icon && <div className="mb-4 text-gray-900">{icon}</div>}
            <h3 className="mb-3 text-lg font-semibold leading-6 text-black group-hover:text-blue-600 transition-colors">
                {title}
            </h3>
            <p className="text-sm leading-6 text-gray-600">
                {description}
            </p>
        </div>
    );
}
