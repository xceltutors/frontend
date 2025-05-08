export function MiniCalendar() {
    return (
        <div className="mb-6">
            <div className="mb-2 flex items-center justify-between">
                <h4 className="font-medium">12 Feb</h4>
                <div className="flex gap-1">
                    <button className="rounded p-1 hover:bg-gray-100">
                        <span className="sr-only">Previous</span>
                        &lt;
                    </button>
                    <button className="rounded p-1 hover:bg-gray-100">
                        <span className="sr-only">Next</span>
                        &gt;
                    </button>
                </div>
            </div>

            <div className="grid grid-cols-7 gap-1 text-center text-xs">
                <div className="py-1 font-medium">S</div>
                <div className="py-1 font-medium">M</div>
                <div className="py-1 font-medium">T</div>
                <div className="py-1 font-medium">W</div>
                <div className="py-1 font-medium">T</div>
                <div className="py-1 font-medium">F</div>
                <div className="py-1 font-medium">S</div>

                <div className="rounded py-1">09</div>
                <div className="rounded py-1">10</div>
                <div className="rounded py-1">11</div>
                <div className="rounded py-1">12</div>
                <div className="rounded py-1">13</div>
                <div className="rounded bg-orange-500 py-1 text-white">14</div>
                <div className="rounded py-1">15</div>
            </div>
        </div>
    )
}
