import Image from "next/image";

export default function ChatPage() {
  return (
    <div className="flex h-screen">
      {/* Left Sidebar */}
      <div className="w-64 bg-[#0A0F5C] text-white p-4">
        <div className="mb-8">
          <h1 className="text-2xl font-bold">ConnectAmerica</h1>
        </div>
        
        {/* Chat Navigation */}
        <nav>
          <div className="flex items-center gap-2 mb-6">
            <span className="text-teal-400">💬</span>
            <span className="text-teal-400">Chats</span>
          </div>
          
          {/* Recent Chats List */}
          <div className="space-y-4">
            <div className="hover:bg-blue-900 p-2 rounded">Recent Chat 1</div>
            <div className="hover:bg-blue-900 p-2 rounded">Recent Chat 2</div>
            <div className="hover:bg-blue-900 p-2 rounded">Recent Chat 3</div>
          </div>
        </nav>

        {/* Settings at bottom */}
        <div className="absolute bottom-4 flex items-center gap-2">
          <span>⚙️</span>
          <span>Settings</span>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col bg-gray-200">
        {/* Chat Messages Area */}
        <div className="flex-1 p-6 overflow-y-auto">
          {/* Example Message */}
          <div className="bg-gray-50 shadow-md p-6 rounded-lg max-w-3xl mb-4">
            <h2 className="font-bold mb-4 text-lg text-gray-800">Home health care coverage options typically include:</h2>
            <ol className="list-decimal pl-6 space-y-3 text-gray-700">
              <li>Medicare Home Health Care: Covers skilled nursing care, physical therapy, occupational therapy, and more.</li>
              <li>Medicaid Home and Community Based Services: Provides personal care, homemaker services, and other support.</li>
              <li>Private Health Insurance: May offer coverage for home health care services, but benefits vary by plan.</li>
              <li>Long-Term Care Insurance: Specifically designed to cover home health care and other long-term care needs.</li>
              <li>Veterans Benefits: The VA offers home health care services for eligible veterans.</li>
            </ol>
          </div>
        </div>

        {/* Message Input */}
        <div className="border-t p-4 bg-gray-100">
          <div className="relative">
            <textarea 
              className="w-full p-3 pr-12 rounded-lg border border-gray-300 bg-white shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none
              text-gray-800 text-base font-medium placeholder-gray-400" 
              placeholder="Type your message here..."
              rows={3}
            />
            <button className="absolute bottom-3 right-3 bg-[#0A0F5C] text-white p-2 rounded-lg hover:bg-blue-900 transition-colors">
              <span>➤</span>
            </button>
          </div>
        </div>
      </div>

      {/* Right Sidebar - References */}
      <div className="w-64 border-l p-4 bg-gray-100">
        <h2 className="text-xl font-bold mb-4 text-[#0A0F5C]">References</h2>
        <div className="space-y-4">
          <div className="p-4 border-2 border-teal-400 rounded-lg bg-teal-50/50">
            <div className="flex justify-between items-start">
              <div>
                <div className="text-[#0A0F5C] font-bold text-lg">#1</div>
                <div className="text-gray-900">Medicare Guide</div>
              </div>
              <span className="text-[#0A0F5C]">📄</span>
            </div>
          </div>
          <div className="p-4 border-2 border-teal-400 rounded-lg bg-teal-50/50">
            <div className="flex justify-between items-start">
              <div>
                <div className="text-[#0A0F5C] font-bold text-lg">#2</div>
                <div className="text-gray-900">Medicaid Services</div>
              </div>
              <span className="text-[#0A0F5C]">📄</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 