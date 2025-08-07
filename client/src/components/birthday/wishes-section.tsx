import { useState } from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useConfetti } from "@/hooks/use-confetti";

interface Wish {
  id: string;
  name: string;
  message: string;
  createdAt: string;
}

export default function WishesSection() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const { triggerConfetti } = useConfetti();
  const queryClient = useQueryClient();

  const { data: wishes = [] } = useQuery<Wish[]>({
    queryKey: ["/api/wishes"],
  });

  const addWishMutation = useMutation({
    mutationFn: async (wishData: { name: string; message: string }) => {
      const response = await apiRequest("POST", "/api/wishes", wishData);
      return response.json();
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["/api/wishes"] });
      setName("");
      setMessage("");
      triggerConfetti({
        particleCount: 30,
        spread: 50,
        origin: { y: 0.7 }
      });
    },
  });

  const handleSubmitWish = () => {
    if (name.trim() && message.trim()) {
      addWishMutation.mutate({ name: name.trim(), message: message.trim() });
    }
  };

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInHours = Math.floor((now.getTime() - date.getTime()) / (1000 * 60 * 60));
    
    if (diffInHours < 1) return "Just now";
    if (diffInHours === 1) return "1 hour ago";
    return `${diffInHours} hours ago`;
  };

  return (
    <section id="wishes" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-5xl font-dancing text-center text-white mb-8">Birthday Wishes 🌟</h2>
        
        <div className="bg-white/10 backdrop-blur-md rounded-lg p-8 mb-8">
          <h3 className="text-2xl font-dancing text-rose-gold mb-4 text-center">Leave a Birthday Wish</h3>
          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
              className="flex-1 p-3 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:border-rose-gold"
            />
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your birthday wish for Annu"
              className="flex-2 p-3 rounded-lg bg-white/20 text-white placeholder-white/60 border border-white/30 focus:outline-none focus:border-rose-gold"
            />
            <button
              onClick={handleSubmitWish}
              disabled={addWishMutation.isPending}
              className="bg-rose-deep hover:bg-burgundy text-white font-semibold py-3 px-6 rounded-lg disabled:opacity-50"
            >
              {addWishMutation.isPending ? "Sending..." : "Send Wish 💕"}
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {/* Special Birthday Message */}
          <div className="bg-gradient-to-r from-rose-gold/20 to-soft-pink/20 backdrop-blur-md rounded-lg p-8 border border-rose-gold/30">
            <div className="text-center mb-4">
              <span className="font-dancing text-2xl text-rose-gold font-bold">🌸 From Your Secret Admirer 🌸</span>
            </div>
            <div className="text-white space-y-4 leading-relaxed">
              <p className="text-center text-xl font-dancing mb-4">🌸 जन्मदिन की रंग-बिरंगी शुभकामनाएँ, मेरी प्यारी राधा, मेरी अन्नु! 🌸</p>
              
              <p><em>"कुछ रिश्ते ऐसे होते हैं, जो सीधे दिल से दिल तक जाते हैं,
              न डायलॉग चाहिए, न ड्रामा, बस प्यार का एक ठाकुर जी वाला जादू!"</em></p>

              <p>मेरी प्यारी अन्नु,</p>
              
              <p>तुम्हारा जन्मदिन मेरे लिए सिर्फ़ केक काटने का बहाना नहीं है (हालांकि केक तो बनता है, वो भी चॉकलेट वाला! 😜), ये वो दिन है जब राधा रानी ने सोचा, "चलो, धरती पर थोड़ा और प्यार बिखेरते हैं!" और तुम पैदा हुईं! ✨ तुम्हारी मुस्कान तो ऐसी है कि सूरज भी शरमा जाए, और तुम्हारा सादापन? मानो वृंदावन की गलियों से सीधा चला आया हो!</p>

              <p><em>"राधा ने कृष्ण को चाहा, कृष्ण ने राधा को,
              और तुमने? मेरे दिल में जगह बना ली, बिना किराए के!"</em> 😄</p>

              <p>तुम्हारा अपने परिवार के लिए प्यार देखकर लगता है कि तुम कोई सुपरहीरो हो, जिसका सुपरपावर है बिना शोर मचाए सबका ख्याल रखना। मम्मी-पापा, भाई-बहन, सबके लिए तुम्हारा डेडिकेशन तो ऐसा है कि मैं सोचता हूँ, "अन्नु, थोड़ा प्यार मेरे लिए भी बचा लो यार!" 😅</p>

              <p><em>"लड़की का असली गहना उसका दिल होता है,
              और तुम, अन्नु, तो पूरा खजाना हो!"</em></p>

              <p>जब तुम "राधे राधे" बोलती हो, तो लगता है जैसे बाँके बिहारी जी खुद मुस्कुरा रहे हों। तुम्हारी भक्ति ने मुझे भी मंदिर की ओर खींच लिया, और तुम्हारा साथ? वो तो मेरे लिए हर दिन होली और दीवाली एक साथ! 🎉</p>

              <p>अब थोड़ा मज़ा भी हो जाए:
              तुम्हारे जन्मदिन पर मैंने सोचा, क्या गिफ्ट दूँ? फिर याद आया, तुम तो खुद ही सबसे बड़ा गिफ्ट हो! 😜 लेकिन फिर भी, मैंने ठाकुर जी से कुछ खास माँगा है:</p>

              <ul className="list-none space-y-2 ml-4">
                <li>🔹 तुम्हारा हर दिन माखन-मिश्री जितना मीठा हो।</li>
                <li>🔹 तुम्हारी हँसी इतनी ज़ोरदार हो कि पड़ोसी भी नाचने लगें।</li>
                <li>🔹 तुम्हारे सपने इतने बड़े हों कि कृष्ण जी भी बोलें, "अन्नु, थोड़ा चिल करो!" 😎</li>
                <li>🔹 और मैं? हमेशा तुम्हारे साथ, चाहे तुम केक खाओ या मुझसे माखन चुराने की प्लानिंग करो!</li>
              </ul>

              <p className="text-center text-xl font-dancing mt-6">🎂 Happy Birthday, मेरी राधा अन्नु! 🎂</p>
              
              <p className="text-center">तुम्हारा जीवन राधा-कृष्ण की रासलीला जितना रंगीन हो,
              तुम्हारी हँसी माखन की तरह चिकनी और मीठी रहे,
              और तुम्हारी भक्ति यूँ ही हर दिल को वृंदावन ले जाए।</p>

              <p className="text-center text-2xl font-dancing mt-4">राधे राधे! 🌺🕉️💖</p>
              
              <p className="text-center text-sm text-white/70 mt-2">(और हाँ, केक का एक बड़ा पीस मेरे लिए बचा लेना! 😉)</p>
            </div>
          </div>

          {wishes.map((wish) => (
            <div key={wish.id} className="bg-white/10 backdrop-blur-md rounded-lg p-6">
              <div className="flex justify-between items-start mb-2">
                <span className="font-semibold text-rose-gold">{wish.name}</span>
                <span className="text-white/60 text-sm">{formatTimeAgo(wish.createdAt)}</span>
              </div>
              <p className="text-white">{wish.message}</p>
            </div>
          ))}
          
          {wishes.length === 0 && (
            <div className="text-center text-white/60 py-8">
              Be the first to leave a birthday wish! 💕
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
