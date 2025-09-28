import {IconPicker} from "@/app/components/icon";

type RecommendationType = 1 | 2 | 3;

interface RecommendationProductProps {
    value: RecommendationType;
}

const recommendationMap = {
    1: {text: '', color: 'text-gray-600', icon: ''},
    2: {text: 'نرم‌افزار تایید شده توسط برسا نوین رای', color: 'text-green-600', icon: 'star'},
    3: {text: 'نرم‌افزار رسمی برسا نوین رای', color: 'text-blue-600', icon: 'star'},
};

export function RecommendationProduct({value}: RecommendationProductProps) {
    const recommendation = recommendationMap[value] || recommendationMap[1];

    return (
        <div className="flex items-center gap-1 mt-3">
            <IconPicker icon={recommendation.icon}/>
            <p className={`mb-0 font-bold ${recommendation.color}`}>
                {recommendation.text}
            </p>
        </div>
    );
}
